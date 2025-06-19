videoNavData = [
    {name:'全部'}, {name:'Shorts'}, {name:'影片'},
    {name:'未观看'}, {name:'已观看'}, {name:'最新上传'}, {name:'直播'},
    {name:'4分钟内'}, {name:'4到20分钟'}, {name:'20分钟以上'},
];
const videoNavContainer = document.getElementById('search-video-nav');
let videoSelectIndex = 0;
function videoNavRefresh(){
    videoNavContainer.innerHTML = '';
    videoNavData.forEach((item, index)=> {
        let div = document.createElement('div');
        div.className = "video-nav-item" + (index===videoSelectIndex?" active":"");
        div.innerHTML = `${item.name}`;
        div.addEventListener('click', ()=>{
            videoSelectIndex = index;
            videoNavRefresh();
        })
        videoNavContainer.appendChild(div);
    });
    let div = document.createElement('div');
    div.className = 'search-filter';
    div.innerHTML = `
        <div>筛选器</div>
        <div style="width: 24px; height: 24px;"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M15 17h6v1h-6v-1zm-4 0H3v1h8v2h1v-5h-1v2zm3-9h1V3h-1v2H3v1h11v2zm4-3v1h3V5h-3zM6 14h1V9H6v2H3v1h3v2zm4-2h11v-1H10v1z"></path></svg> </div>
    `;
    videoNavContainer.appendChild(div);
}
videoNavRefresh();