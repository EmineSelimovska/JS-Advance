function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((e) =>
    e.addEventListener("click", onClick)
  );

  function onClick(event) {
    const parent = event.target.parentElement;
    const unlockedCheck = parent.querySelector('input[value="unlock"]');

    if (unlockedCheck.checked) {
      const hiidenDiv = parent.querySelector("div");
      hiidenDiv.style.display === "block"
        ? (hiidenDiv.style.display = "none")
        : (hiidenDiv.style.display = "block");

      event.target.textContent === "Show more"
        ? (event.target.textContent = "Hide it")
        : (event.target.textContent = "Show more");
    }
  }
}
