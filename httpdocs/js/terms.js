import Page from "./page.js";

export default class Terms extends Page {
  constructor(routes) {
    super('terms', routes);
    let that = this;
    routes.push({ url: '/terms-of-service', setup: termsOfServicePage });
    function termsOfServicePage() {
      const template = document.createElement('template');
      template.innerHTML =
        `<section class="section">
          <div class="container content">
            <h1 class="title pb-3"><i class="fa-solid fa-sm fa-shield-halved"></i> Terms of Service</h1>
            <ul>
              <li>Effective: 7 July 2022</li>
              <li>Last updated: 7 July 2022</li>
            </ul>
            <p>The <a target="_blank" href="https://webots.cloud">webots.cloud</a> website is created, developed and operated by 
              Cyberbotics Sàrl, headquartered at EPFL Innovation Park, Building C, 1015 Lausanne, Switzerland, registered 
              with the Swiss UID CHE-104.504.228 (hereinafter “Cyberbotics” or “we”). These Terms of Service are a legal 
              agreement between you and Cyberbotics. They apply to your use of our services.</p>
            <h2 class="subtitle pt-4">Creating an account</h2>
            <p>In order to use our services, you may need to create an account with an e-mail address and a password. You are 
              responsible for keeping your password secure. Our <a href="privacy-policy" 
              onclick="document.getElementById('scrollable-body').scrollTo(0, 0);"> Privacy Policy</a> informs you on what 
              information we collect and how we use it.</p>
            <h2 class="subtitle pt-4">Our services</h2>
            <p>We provide you with the following services:</p>
            <ul>
              <li>Upload any Webots world file (<a target="_blank" href="scene">scene</a>) and view it 
                in 3D.</li>
              <li>Upload any Webots animation (<a target="_blank" href="animation">animation</a>) and 
                play it back in 3D.</li>
              <li>Refer to a GitHub repository containing a Webots simulation (<a target="_blank" 
                href="simulation">simulation</a>), run it in the cloud and visualize the result in real 
                time.</li>
              <li>Register your own server (<a target="_blank" href="server">server</a>) to run the 
                simulations.</Li>
            </ul>
            <h2 class="subtitle pt-4">Your content</h2>
            <p>Your content includes the scenes, animations and simulations you provide. You are the owner of your content. 
              By using our services, you agree that your scenes, animations and simulations visualizations are made publicly 
              available under the terms of Creative Common license. We reserve the right to remove your content for any 
              reason.</p>
            <h2 class="subtitle pt-4">Service availability</h2>
            <p>We do reasonable efforts to keep webots.cloud operational but we cannot guarantee it will be available at all 
              times. We may for example need to perform maintenance or experience software or hardware problems.</p>
            <h2 class="subtitle pt-4">Applicable Law</h2>
            <p>These terms are subject to Switzerland law.</p>
            <h2 class="subtitle pt-4">How to contact us?</h2>
            <p>If you have any questions concerning the Terms of Service, please contact us at 
              <a href="mailto: info@cyberbotics.com">info@cyberbotics.com</a>.</p>
          </div>
        </section>`
      that.setup('terms-of-service', template.content);
    }
  }
}