playNavData = [
    {name:'全部'}, {name:'游戏'}, {name:'直播中'},
    {name:'Podcast'}, {name:'合辑'},{name:'系列影片'}
];

const playNavContainer = document.getElementById('nav-list');
let playSelectIndex = 0;
function playNavRefresh(){
    playNavContainer.innerHTML = '';
    playNavData.forEach((item, index)=> {
        let div = document.createElement('div');
        div.className = "play-nav-item" + (index===playSelectIndex?" active":"");
        div.innerHTML = `${item.name}`;
        div.addEventListener('click', ()=>{
            playSelectIndex = index;
            playNavRefresh();
        })
        playNavContainer.appendChild(div);
    });
}
playNavRefresh();

const rightvideoContainer = document.getElementById('right-videos');
let rightvideocard = ``;
for(i = 1; i < 8; i++){
 rightvideocard += `
    <div class="right-video-card">
        <img class="right-video-img" src="images/videobanner/3.avif">
        <div>
            <div>How Linux killed Unix: the UNIX Wars</div>
            <div class="right-video-info">The Linux Experiment</div>
            <div class="right-video-info">The Linux Experiment</div>
        </div>
    </div>
`;
}
rightvideoContainer.innerHTML = rightvideocard;
