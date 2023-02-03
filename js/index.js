let myBtn = document.getElementById("myBtn");
let myQuote = document.getElementById("myQoute");
let myAuther = document.getElementById("myAuther");
let myImg = document.getElementById("myImg");

let list = [
  {
    // 1
    qoute: "“Be yourself; everyone else is already taken.”",
    name: "Oscar Wilde",
  },
  {
    // 2
    qoute:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    name: "― Marilyn Monroe",
  },
  {
    // 3
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    name: "― Albert Einstein",
  },
  //   4
  { qoute: "“So many books, so little time.”", name: "― Frank Zappa" },
  {
    // 5
    qoute: "“A room without books is like a body without a soul.”",
    name: "― Marcus Tullius Cicero",
  },
  {
    // 6
    qoute:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    name: "― Bernard M. Baruch",
  },
  {
    // 7
    qoute: "“You've gotta dance like there's nobody watching,",
    name: "― William W. Purkey",
  },
  {
    // 8
    qoute:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    name: "― Dr. Seuss",
  },
  {
    // 9
    qoute: "“You only live once, but if you do it right, once is enough.”",
    name: "― Mae West",
  },
  {
    // 10
    qoute: "“Be the change that you wish to see in the world.”",
    name: "― Mahatma Gandhi",
  },
];

myBtn.addEventListener("click", () => {
  let num = Math.ceil(Math.random() * 10);
  myAuther.innerHTML = list[num - 1].name;
  myQuote.innerHTML = list[num - 1].qoute;
  myImg.setAttribute("src", `./images/${num}.jpg`);
  console.log(num);
});
