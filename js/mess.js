class mess {
  constructor() {
    //pass
  }
  static send(text) {
    const color = "var(--corect-color)";
    sent.innerHTML = `${capitalLetter(text)}`;
    message.classList.toggle("noMess");
    messageImg.style.backgroundColor = color;
    message.style.color = color;
    setTimeout(() => {
      message.classList.toggle("noMess");
    }, 3000);
  }
  static error(text) {
    const color = "var(--error-color)";
    sent.innerHTML = `${capitalLetter(text)}`;
    message.classList.toggle("noMess");
    messageImg.style.backgroundColor = color;
    message.style.color = color;
    setTimeout(() => {
      message.classList.toggle("noMess");
    }, 3000);
  }
}