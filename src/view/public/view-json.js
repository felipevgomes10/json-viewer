(() => {
  const container = document.querySelector("#jsoneditor");
  const options = { mode: "view" };
  const editor = new JSONEditor(container, options);

  const [query] = new URLSearchParams(window.location.search).values();

  editor.set(JSON.parse(query));
})();
