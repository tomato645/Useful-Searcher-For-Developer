const engine = "https://google.com/search?q=";
const space = "+"
const input = document.querySelector(".inputs");

function show() {
  fixed = document.getElementById("fixed").value; // 固定する言葉
  added = document.getElementById("added").value; // 変化する言葉

  // URLの作成
  // TODO: 検索エンジン選択追加
  URL = engine + fixed + space + added;

  // htmlを書き換え
  var target = document.getElementById("result");
  result.href = URL;
  result.innerText = "検索結果をみる";

  var search_word = fixed + " " + added;
  document.getElementById("search_word").innerHTML = "検索するワード「" + search_word + "」";
}

fixed.addEventListener("input", show, false);
added.addEventListener("input", show, false);
