channel = [
    {url:'images/2brz.jpg', name:'錫蘭Ceylan'},
    {url:'images/fubuki.jpg', name:'フブキCh。白上フブキ'},
    {url:'images/pdp.jpg', name:'PewDiePie'},
    {url:'images/miku.jpg', name:'Hatsune Miku'},
    {url:'images/baga.jpg', name:'Beluga'},
    {url:'images/applefans.jpg', name:'APPLEFANS蘋果迷'},
]
const img_container = document.getElementById('channel-list');
let html = '';
channel.forEach(item => {
  html += `
    <div class="item">
      <img src="${item.url}" />
      <div>${item.name}</div>
    </div>
  `;
});

img_container.innerHTML = html;
