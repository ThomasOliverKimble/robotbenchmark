import Page from "./page.js";

document.addEventListener('DOMContentLoaded', function() {
  const content = aboutPage()
  new Page('about', content);
});

function aboutPage() {
  const template = document.createElement('template');
  template.innerHTML = `<div>About</div>`;
  return template.content;
}
