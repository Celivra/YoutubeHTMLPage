videoData = [
    {name:'全部'}, {name:'游戏'}, {name:'直播中'},
    {name:'Podcast'}, {name:'合辑'},
    {name:'Minecraft'}, {name:'卡通'}, {name:'最新上传'},
    {name:'已观看'}, {name:'让你耳目一新'},
];

const videoNavContainer = document.getElementById('video-nav');
let videoSelectIndex = 0;
function videoNavRefresh(){
    videoNavContainer.innerHTML = '';
    videoData.forEach((item, index)=> {
        let div = document.createElement('div');
        div.className = "video-nav-item" + (index===videoSelectIndex?" active":"");
        div.innerHTML = `${item.name}`;
        div.addEventListener('click', ()=>{
            videoSelectIndex = index;
            videoNavRefresh();
        })
        videoNavContainer.appendChild(div);
    });
}
videoNavRefresh();