(() => {
  const button = document.querySelector(".button");
  const textArea = document.querySelector(".textarea");

  if (textArea.value) button.removeAttribute("disabled");
  else button.setAttribute("disabled", "true");

  textArea.addEventListener("input", (event) => {
    const {
      target: { value },
    } = event;
    if (value) button.removeAttribute("disabled");
    else button.setAttribute("disabled", "true");
  });

  button.addEventListener("click", async () => {
    const textArea = document.querySelector(".textarea");
    window.open(`/view-json?q=${JSON.stringify(eval(`(${textArea.value})`))}`);
  });
})();
