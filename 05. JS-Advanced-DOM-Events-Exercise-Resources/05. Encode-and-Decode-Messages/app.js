function encodeAndDecodeMessages() {
  const textArea = document.querySelectorAll("textarea");
  const buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", decode);

  function encode() {
    let encodedMessages = "";
    const input = textArea[0].value;
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      encodedMessages += String.fromCharCode(element.charCodeAt(0) + 1);
    }
    textArea[1].value = encodedMessages;
    textArea[0].value = "";
  }
  function decode() {
    let decodedMessages = "";
    const input = textArea[1].value;
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      decodedMessages += String.fromCharCode(element.charCodeAt(0) - 1);
    }
    textArea[1].value = decodedMessages;
  }
}
