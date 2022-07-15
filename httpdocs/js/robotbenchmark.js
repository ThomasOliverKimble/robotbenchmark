import Page from "./page.js";

document.addEventListener('DOMContentLoaded', function() {
  const content = homePage()
  new Page('home', content);
  document.getElementById('start-benchmark-button').addEventListener('click', runWebotsView);
  document.getElementById('input-benchmark-url').addEventListener('keyup', runWebotsView);
});

function homePage() {
  const template = document.createElement('template');
  template.innerHTML =
    `<section class="hero is-medium is-black is-vertically-centered">
      <div class="hero-body">
        <div class="container">
          <p class="title">
            Benchmark Testing
          </p>
          <p class="subtitle">
            Add the url to your benchmark's GitHub repository:
          </p>
          <section class="container">
            <div class="container-input">
              <input class="input" id="input-benchmark-url" type="text"
                placeholder="https://github.com/ ...">
              <button class="button is-warning" id="start-benchmark-button">Start Benchmark</button>
            </div>
          </section>
        </div>
      </div>
    </section>`;
  return template.content;
}

function runWebotsView(event) {
  if (!(event.key === 'Enter' || event.target.id === 'start-benchmark-button'))
    return;

  const url = document.getElementById('input-benchmark-url').value;
  const server = 'https://testing.webots.cloud/ajax/server/session.php?url=' + url;
  const mode = 'x3d';

  setupWebotsView(url);

  let promise = new Promise((resolve, reject) => {
    let dotIndex = url.lastIndexOf('/') + 1;
    let thumbnailUrl = (url.slice(0, dotIndex) + "." +url.slice(dotIndex)).replace('github.com',
      'raw.githubusercontent.com').replace('/blob', '').replace('.wbt', '.jpg');
    document.getElementById('webots-view').connect(server, mode, false, undefined, 300, thumbnailUrl);
    document.getElementById('webots-view').showQuit = false;
    resolve();
  });
}

function setupWebotsView(url) {
  const view = (!document.getElementById('webots-view')) ?
    '<webots-view id="webots-view" style="height:100%; width:100%; display:block;"></webots-view>' : '';
  let template = document.createElement('template');
  template.innerHTML =
    `<section class="section" style="padding:0;height:100%">
      <div class="simulation-container" id="webots-view-container">
        ${view}
      </div>
     </section>'`;
  new Page('webots-view', template.content);
}
