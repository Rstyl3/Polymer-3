import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"; //web components

import "../../node_modules/@polymer/iron-form/iron-form.js";
import "../../node_modules/@polymer/paper-input/paper-input.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-checkbox/paper-checkbox.js"; //custom components

import './first-component.js';
import './emojiRating.js';
import "./custom-greeting.js";
import { addToCartIcon } from './my-icons.js';
/**
 * @customElement
 * @polymer
 */

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .btn{
          background-color: indigo;
          color: white;
        }
        .btn svg{
          padding-left: 5px;
          fill: white;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <iron-form id="formOne" on-iron-form-response="onResponse">
        <form method="post" action="https://httpbin.org/post" is="iron-form">
          <paper-input type="text" name="name" label="Name" required auto-validate></paper-input>
          <input type="checkbox" name="donuts" checked> I like donuts<br>
          <paper-checkbox name="cheese"  >I like Cheese</paper-checkbox>
          <br><br>
          <paper-button class="btn" raised on-tap="submitHandler">Submit${addToCartIcon}</paper-button>
        </form>
        
      </iron-form>
      <h2>Output:</h2>
      <div>{{output}}</div>
      <h2>Response:</h2>
      <pre>{{response}}</pre>
      <first-component title="Testing data binding change!" ></first-component>
      <custom-greeting></custom-greeting>

    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'first-element'
      }
    };
  }

  constructor() {
    super(); // this.addEventListener('click', this.submitForm.bind(this));

    this.addEventListener('iron-form-submit', function (event) {
      console.log("event is", event.detail);
      this.output = JSON.stringify(event.detail);
    });
  }

  submitHandler() {
    this.$.formOne.submit();
  }

  onResponse(e) {
    this.response = JSON.stringify(e.detail.response, null, 2);
  }

}

window.customElements.define('my-app', MyApp);