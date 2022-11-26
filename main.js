const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "外は華氏94度だったので、:insertx:は散歩に出かけました。:inserty:に到着すると、彼らはしばらく恐怖の眼差しで見つめ、:insertz:。ボブはその一時始終を見ていましたが、驚きませんでした。––:insertx:は体重が300ポンドもあり、その日は暑かったのです。";
//"It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = [
  "ゴブリンのウィリー",
  "ビッグダディ",
  "ファーザー・クリスマス",
];
const insertY = ["炊き出し", "ディズニーランド", "ホワイトハウス"];
const insertZ = [
  "自然発火しました",
  "歩道で水たまりになって溶けてしまいました",
  "ナメクジになり這っていきました",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  //newStory = newStory.replace(":insertx:", xItem);
  //正規表現gオプションで、複数の文字列すべてを置換できる
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("ボブ", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071);
    const temperature = Math.round(((94 - 32) * 5) / 9);
    const weightUK = weight + "ストーン";
    const temperatureUK = temperature + "度";
    newStory = newStory.replace("300ポンド", weightUK);
    newStory = newStory.replace("華氏94度", temperatureUK);
  }

  if (document.getElementById("jp").checked) {
    const weight = Math.round(300 * 0.454);
    const temperature = Math.round(((94 - 32) * 5) / 9);
    const weightJP = weight + "キロ";
    const temperatureJP = temperature + "度";
    newStory = newStory.replace("300ポンド", weightJP);
    newStory = newStory.replace("華氏94度", temperatureJP);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
