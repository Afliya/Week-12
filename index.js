// let writeNameWithCapitl = () => {
//   fio = document.getElementById("full-name");
//   let result = fio[0].toUpperCase() + fio.slice(1);
//   document.getElementById("full-name").textContent = result;
// };

// function capitalizeFLEtter() {
//   const fio = document.getElementById("full-name");
//   const result = fio[0].toUpperCase() + fio.slice(1);
//   const document.getElementById("full-name").textContent = result;
// }

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//   let fio = document.getElementById("full-name");
//   result = fio[0].toUpperCase() + fio.slice(1);
//   document.getElementById("output").textContent = result;
// });

// let input = document.querySelector("#full-name");
// input.addEventListener("input", function () {
//   this.value = this.value[0].toUpperCase() + this.value.slice(1);
// });

let fullName = document.querySelector("#full-name");
let button = document.querySelector("#button").textContent;
let output = document.querySelector("#output").textContent;

button.addEventListener('click', function(event) {
  let b = fullName.textContent;
  output.textContent = b[0].toUpperCase() + b.slice(1);
}
)


// let avatar = document.getElementById("avatar-result");
// function openLink() {
//   let a = document.getElementById("avatar-link").value;

//   avatar.alt = "avatar";
// }

// let button = document.getElementById("button");
// button.addEventListener("click", function (event) {
//   let avatarlink = document.getElementById("avatar-link").value;
//   // let avatar = document.getElementById("avatar-result");
//   let img = document.createElement("img");
//   img.src = avatarlink;
//   document.body.appendChild(img);
// });

var button = document.getElementById("button");
button.addEventListener("click", function (event) {
    var imageurl = document.getElementById("avatar-link").value;
    var img = document.createElement("img");
    document.body.appendChild(img);
  });

  let comment = document.getElementById('comment').value;
  let button = document.getElementById('button');
  let commentOutput = document.getElementById('comment-result');

  button.addEventListener('click', function() {
    commentOutput.value = str.replace(viagra, '***')
  }
  )

//*** Задание под звездочкой
let str = '<div id='content'>This is test link <a href="#"></a></div>';
function deleteTags(str) {
  let regex = /( |<([^>]+)>)/ig,
  result = str.replace(regex, "");
  return result;
}

console.log(deleteTags(str));
