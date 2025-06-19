recommandVideoData = [
    {url:'images/profile/r1.avif', title:'曉丑🤡', info:'观看次数：53万次 · 1 个月前'},
    {url:'images/profile/r2.avif', title:'coding...', info:'观看次数：3.5万次 · 1 个月前'},
    {url:'images/profile/r3.avif', title:'我使用ollama在本地佈署了deepseek !', info:'观看次数：5.2万次 · 4 个月前'},
    {url:'images/profile/r4.avif', title:'我進入了麥塊電影伺服器礦坑的第二層!!! 🤑', info:'观看次数：64万次 · 2 个月前'},
];
const recommand_container = document.getElementById('recommand-video');
const total_container = document.getElementById('total-video');

function loadTotalVideo(){
    recommandVideoData.forEach((item)=>{
        let div = document.createElement('div');
        div.innerHTML = `
        <img style="border-radius: 20px;" src="${item.url}" />
            <div>${item.title}</div>
        <div style="font-size: 12px; color: #606060;">${item.info}</div>
        `;
        total_container.appendChild(div);
    })
}
loadTotalVideo()
function loadRecommandVideo(){
    recommandVideoData.forEach((item)=>{
        let div = document.createElement('div');
        div.innerHTML = `
        <img style="border-radius: 20px;" src="${item.url}" />
            <div>${item.title}</div>
        <div style="font-size: 12px; color: #606060;">${item.info}</div>
        `;
        recommand_container.appendChild(div);
    })
}
loadRecommandVideo();