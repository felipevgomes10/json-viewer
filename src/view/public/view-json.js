(() => {
  const container = document.querySelector("#jsoneditor");
  const options = { mode: "view" };
  const editor = new JSONEditor(container, options);

  const [query] = new URLSearchParams(window.location.search).values();

  editor.set(JSON.parse(query));

  const copyButton = document.querySelector(".copy-button");
  copyButton.addEventListener("click", async (event) => {
    event.target.innerText = "COPING...";
    await navigator.clipboard.writeText(
      JSON.stringify(JSON.parse(query), null, 2)
    );
    event.target.innerText = "COPIED!";
    setTimeout(() => {
      copyButton.innerText = "COPY JSON";
    }, 2000 /* two seconds */);
  });
})();
