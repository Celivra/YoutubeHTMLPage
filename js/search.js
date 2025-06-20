videoNavData = [
    {name:'全部'}, {name:'Shorts'}, {name:'影片'},
    {name:'未观看'}, {name:'已观看'}, {name:'最新上传'}, {name:'直播'},
    {name:'4分钟内'}, {name:'4到20分钟'}, {name:'20分钟以上'},
];
searchVideoData = [
    {url:'images/search/1.avif', avater:'images/search/a1.jpg', title:'Unix vs Linux', author:'Gary Explains', watch:'觀看次數：170萬次 7 年前 ', desc:'#garyexplains Affiliate Disclosure: When you buy through links in our description Gary Explains may earn an affiliate commission.'},
    {url:'images/search/2.avif', avater:'images/search/a2.jpg', title:'The Rise of Unix. The Seeds of its Fall.', author:'Asianometry', watch:'觀看次數：9.3萬次 2 年前 ', desc:'Notes: - I want to thank viewer Lance for pointing out that NeXTSTEP derives from Mach, the CMU variant of BSD. I will mention ...'},
    {url:'images/search/3.avif', avater:'images/search/a3.jpg', title:'What is Unix and why does it matter? Operating System OS Explained, History, Unix vs Linux, etc.', author:'TeXplaiNIT', watch:'觀看次數：7.8萬次 3 年前', desc:'Learn about Unix, get a basic overview, its history, how it relates to today, and more! This channel is dedicated to explaining ...'},
    {url:'images/search/4.avif', avater:'images/search/a4.jpg', title:'Unix Pipeline (Brian Kernighan) - Computerphile', author:' Computerphile ', watch:'觀看次數：22萬次 9 年前', desc:'Just what is a pipeline in the computer science sense? We asked Computer Science guru Professor Brian Kernighan Why ...'},
]

const searchVideoContainer = document.getElementContainer = document.getElementById('video-cards');
function loadsearchVideo(){
    searchVideoData.forEach((item)=>{
        let div = document.createElement('div');
        div.className = 'search-item';
        div.innerHTML = `
        <div style="width: 500px; height: 280.5; margin-right: 16px;">
            <img style="width: 500px; height: 280.5; border-radius: 10px;" src="${item.url}"/>
        </div>
        <div class="s-video-info">
            <div>
                <div class="s-video-title">${item.title}</div>
                <div class="s-video-dot"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg></div>
            </div>
            <div class="s-video-watch">${item.watch}</div>
            <div>
                <div class="s-video-avater"><img style="width: 24px; height: 24px;" src="${item.avater}"></div>
                <div class="s-video-author">${item.author}</div>
            </div>
            <div class="s-video-desc">${item.desc}</div>
        </div>
        `;
        searchVideoContainer.appendChild(div);
    })
}
loadsearchVideo();


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