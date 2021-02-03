
'use strict'; //決まり文句（エラーチェックをしてくれる）
// content_script.js
async function useURLFunc() {
  let sendMsgFunc = () => {
      return new Promise(resolve => {
          chrome.runtime.sendMessage({ greeting: 'url' }, response => {
              resolve(response.farewell);
          });
      });
  };
  let url = await sendMsgFunc();
  window.alert(url);
}

(async () => {
  await useURLFunc();
})();
//結果を表示する領域を取得
// var results = document.getElementById("results");

//結果を格納する配列を宣言
// var array = [];
/*
window.alert("run");
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0]);
  //window.alert(tabs[0]);
});
*/
/*
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
  const url = tabs[0].url; // ←これ
  window.alert(url);
});
*/
/*
//★ブラウザのタブを取得

chrome.tabs.query({lastFocusedWindow: true},function(tabs){


 //取得したタブ数分を繰り返し
 for(var i=0; i<tabs.length; i++){
   var output = tabs[i].url; //urlを取得
   array.push(output);
 }


// results.value = array.join("\n"); //arrayの要素を改行で区切ってresultsに表示
// results.select(); //resultsを選択状態に

});
*/