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
    const response = await fetch("/view-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ value: eval("(" + textArea.value + ")") }),
    });
    const { pathToFile } = await response.json();
    window.location.pathname = pathToFile;
  });
})();
