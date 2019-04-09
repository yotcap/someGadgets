let rangeSpdText, rangePitText;
let speed = document.querySelector('#rangeSpd');
let pit = document.querySelector('#rangePit');
rangeSpdText = document.querySelector('#rangeSpdText');
rangePitText = document.querySelector('#rangePitText');
function handlerRangeSpd() {
  rangeSpdText.innerText = speed.value;
}
function handlerRangePit() {
  rangePitText.innerText = pit.value;
}

(function() {
  let xhr, url, tok;
  let params = {
    tok: '24.5d168*************2443.282335-15953915',   // 需替换
    cuid: 'tao',
    ctp: '1',
    lan: 'zh',
    spd: 5,
    pit: 5,
    per: 0
  }
  let aud = document.querySelectorAll('#aud')[0];
  document.querySelector('#btn').addEventListener('click', getAudio);
  function getAudio() {
    params.tex = document.getElementById('textArea').value;
    params.spd = speed.value;
    params.pit = pit.value;
    params.per = document.querySelector("input[name='speaker']:checked").value;
    tok = document.querySelector('#inp').value;
    if (tok) {params.tok = tok;}
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    url = `http://tsn.baidu.com/text2audio?tok=${params.tok}&cuid=${params.cuid}&ctp=${params.ctp}&lan=${params.lan}&tex=${params.tex}&spd=${params.spd}&pit=${params.pit}&per=${params.per}`;
    xhr.onreadystatechange = getResponse;
    xhr.open('POST', url, true);
    xhr.send();
  }
  function getResponse() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        aud.setAttribute('src', url);
        aud.play();
      }
    }
  }
})();
