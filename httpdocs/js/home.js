import Page from "./page.js";

document.addEventListener('DOMContentLoaded', function() {
  const content = homePage()
  new Page('home', content);
});

function homePage() {
  const template = document.createElement('template');
  template.innerHTML = `<div>Home</div>`;
  return template.content;
}
