import Page from "./page.js";

export default class Home extends Page {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `<div>Home</div>`;
    this.setup('home', template.content);
  }
}
