function autoResize() {
  objTextArea = document.getElementById("code-text");
  while (objTextArea.scrollHeight > objTextArea.offsetHeight) {
    objTextArea.rows += 1;
  }
}
