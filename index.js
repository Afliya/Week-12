const fullName = document.querySelector("#full-name");
const avatar = document.querySelector("#avatar-link");
const comment = document.querySelector("#comment");
const buttonOne = document.querySelector("#button");
const messages = document.querySelector(".messages");

const checkName = () => {
  const b = fullName.value;
  const userName = b.trim().split(" ");
  const changedName = [];

  userName.forEach((element) => {
    let newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
    changedName.push(newName);
  });

  const nameFormatted = changedName.join(" ");
  return nameFormatted;
};

fullName.addEventListener("change", () => {
  fullName.value = checkName();
});

const messageAvatar = () => {
  const imageurl = document.getElementById("avatar-link").value;
  messageAvatar.src = imageurl;
};

const checkMessage = (spam) => {
  const str = spam.replace(/viagra|xxx/gi, "***");
  return str;
};

const createMessage = () => {
  const message = document.createElement("div");
  message.className = "message";
  messages.prepend(message);

  // username
  const messageUserName = document.createElement("p");
  messageUserName.className = "message_name";
  if (fullName.value !== "") {
    messageUserName.textContent = checkName();
  } else {
    messageUserName.textContent = "Username";
  }
  message.append(messageUserName);

  //time
  let showTime = document.createElement("p");
  showTime.className = "current_time";
  let now = new Date();
  showTime.innerHTML = now;

  //avatar
  const messageAvatar = document.createElement("img");
  messageAvatar.className = "message_avatar";
  messageAvatar.innerHTML = document.querySelector("#avatar-link").value;
  message.append(messageAvatar);

  // text
  const messageText = document.createElement("p");
  messageText.className = "message_text";
  messageText.innerHTML = checkMessage(comment.value);
  message.append(messageText);
  fullName.value = "";
  avatar.value = "";
  comment.value = "";

  // remove over 5 elements
  if (messages.childElementCount > 5) {
    messages.removeChild(messages.lastChild);
  }
};

buttonOne.addEventListener("click", () => {
  createMessage();
});
