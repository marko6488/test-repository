const button = document.querySelector("#changeMessage");
const message = document.querySelector("#message");

const messages = [
  "This is a simple HTML, CSS, and JavaScript starter.",
  "The button is working!",
  "You can now customize this page.",
];

let messageIndex = 0;

button.addEventListener("click", () => {
  messageIndex = (messageIndex + 1) % messages.length;
  message.textContent = messages[messageIndex];
});
