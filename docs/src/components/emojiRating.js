import { LitElement, html } from "../../node_modules/@polymer/lit-element/lit-element.js";

class EmojiRating extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      loop: {
        type: Number
      }
    };
  }

  render() {
    return html`<p>This is an extension component using lit-element!</p>`;
  }

}

customElements.define('emoji-rating', EmojiRating);