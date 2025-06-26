videoNavData = [
    {name:'全部'}, {name:'游戏'}, {name:'直播中'},
    {name:'Podcast'}, {name:'合辑'},
    {name:'Minecraft'}, {name:'卡通'}, {name:'最新上传'},
    {name:'已观看'}, {name:'让你耳目一新'},
];
videoData=[
    {jump:'play.html',avater:'images/videoavater/1.jpg', banner:'images/videobanner/1.avif', title:'Animation vs. YouTube (original)', author:'Alan Beckerk', info:'观看次数：1.2亿次 · 1 年前'},
    {jump:'play2.html',avater:'images/videoavater/2.jpg', banner:'images/videobanner/2.avif', title:'Linux is Better Than Mac And Windows', author:'The Linux Cast', info:'观看次数：2535次 · 6 小时前'},
    {jump:'play.html',avater:'images/videoavater/3.jpg', banner:'images/videobanner/3.avif', title:'How Linux killed Unix: the UNIX Wars', author:'The Linux Experiment', info:'观看次数：32万次 · 2 年前'},
    {jump:'play2.html',avater:'images/videoavater/4.jpg', banner:'images/videobanner/4.avif', title:'Oiiaioooooiai Hachiware', author:'呼吸菌QAQ', info:'观看次数：43万次 · 4 个月前'},
    {jump:'play.html',avater:'images/videoavater/5.jpg', banner:'images/videobanner/5.avif', title:`"That was an order. Steiner's attack was an order"- Angry German Cat.Voice from movie Downfall(2004)`, author:'Whatever it is', info:'观看次数：1.1万次 · 2 个月前'},
    {jump:'play2.html',avater:'images/videoavater/6.jpg', banner:'images/videobanner/6.avif', title:`【甘城なつき】貓貓終於碰到會說日語的華人啦！超可愛（散裝日語ww）`, author:'Little dusk', info:'观看次数：20万次 · 7 个月前'},
]
const video_container = document.getElementById('video-list');

function loadVideo(){
  videoData.forEach(video => {
    const item = document.createElement('div');
    item.onclick = () => {
      window.location.href = video.jump;
    };
    item.className = 'video-item';
    item.innerHTML = `
      <img src="${video.banner}" alt="Banner" />
      <div class="video-card">
        <div class="video-avater"><img src="${video.avater}" alt="Avatar" /></div>
        <div class="video-info">
          <div>${video.title}</div>
          <div>${video.author}</div>
          <div>${video.info}</div>
        </div>
        <div class="video-dot">
          <div style="width: 24px; height: 24px; display: block; fill: currentcolor;"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg></div>
        </div>
      </div>
    `;
    video_container.appendChild(item);
  });
}
loadVideo();

const videoNavContainer = document.getElementById('video-nav');
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
}
videoNavRefresh();