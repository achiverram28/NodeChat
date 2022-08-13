//const sock = io();
//sock.on("message", (text) => {
//  writeEvent(text);
//});
const writeEvent = (text) => {
  //<ul> element
  const parent = document.querySelector("#events");
  // li element
  const el = document.createElement("li");
  el.innerHTML = text;
  parent.appendChild(el);
};
const onFormSubmitted = (e) => {
  e.preventDefault();
  const input = document.querySelector("#chat");
  const text = input.value;
  input.value = ""; //resetter after storing the input from the input field
  sock.emit("message", text); //sending the message to the server.
};
writeEvent("WELCOME TO THE GAME");
const sock = io();
sock.on("message", (text) => {
  writeEvent(text);
});
document
  .querySelector("#chat-form")
  .addEventListener("submit", onFormSubmitted);
