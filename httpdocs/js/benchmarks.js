import Page from "./page.js";

document.addEventListener('DOMContentLoaded', function() {
  const content = benchmarksPage()
  new Page('benchmark', content);
});

function benchmarksPage() {
  const template = document.createElement('template');
  template.innerHTML = `<div>Benchmark</div>`;
  return template.content;
}
