import { LitElement, html } from "../../node_modules/@polymer/lit-element/lit-element.js"; // Create your custom component

class CustomGreeting extends LitElement {
  // Declare properties
  static get properties() {
    return {
      name: {
        type: String
      }
    };
  } // Initialize properties


  constructor() {
    super();
    this.name = 'from other component';
  } // Define a template


  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }

} // Register the element with the browser


customElements.define('custom-greeting', CustomGreeting);