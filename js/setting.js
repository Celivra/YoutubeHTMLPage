settingData = [
    {name:'账户', jump:'settings.html'},
    {name:'通知', jump:'settings.html'},
    {name:'播放与观影体验', jump:'settings.html'},
    {name:'隐私权', jump:'settings.html'},
    {name:'已连接的应用程序', jump:'settings.html'},
    {name:'账单预付款', jump:'settings.html'},
    {name:'进阶设定1', jump:'settings.html'},
]
const setting_container = document.getElementById('setting-navlist');
let settinghtml = '';
settingData.forEach((item)=>{
    settinghtml += `
    <div class="item" style="margin:0px 12px;">${item.name}</div>
    `
})
setting_container.innerHTML = settinghtml;