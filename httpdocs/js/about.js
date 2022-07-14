import Page from "./page.js";

export default class About extends Page {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `<div>About</div>`;
    this.setup('about', template.content);
  }
}