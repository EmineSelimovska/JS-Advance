function solve() {
  const nameInput = document.getElementById("recipientName");
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");
  const list = document.getElementById("list");
  const deleted = document.querySelector(".delete-list");
  const send = document.querySelector(".sent-list");

  document.getElementById("add").addEventListener("click", getInfo);
  document.getElementById("reset").addEventListener("click", onReset);

  function getInfo(event) {
    event.preventDefault();
    const name = nameInput.value;
    const title = titleInput.value;
    const message = messageInput.value;

    if (name == "" || title == "" || message == "") {
      return;
    }

    const element = document.createElement("li");
    element.innerHTML = `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;

    list.appendChild(element);

    resetInput();

    element.querySelector("#send").addEventListener("click", sentMeil);

    function sentMeil() {
      const sendMeilElements = document.createElement("li");
      sendMeilElements.innerHTML = ` <span>To: ${name}</span>
    <span>Title: ${title}</span>
    <div class="btn">
        <button type="submit" class="delete">Delete</button>
    </div>`;

      sendMeilElements
        .querySelector(".delete")
        .addEventListener("click", () => {
          const deletedMeil = document.createElement("li");
          deletedMeil.innerHTML = `<span>To: ${name}</span>
        <span>Title: ${title}</span>`;

          deleted.appendChild(deletedMeil);
          sendMeilElements.remove();
        });

      send.appendChild(sendMeilElements);
      element.remove();
    }
    element.querySelector("#delete").addEventListener("click", deleteMail);

    function deleteMail() {
      const deletedMeil = document.createElement("li");
      deletedMeil.innerHTML = `<span>To: ${name}</span>
      <span>Title: ${title}</span>`;

      deleted.appendChild(deletedMeil);
      element.remove();
    }
  }

  function onReset(event) {
    event.preventDefault();
    resetInput();
  }
  function resetInput() {
    nameInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }
}
solve();
