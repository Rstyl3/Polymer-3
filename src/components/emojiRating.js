import { LitElement, html } from '@polymer/lit-element'; 

class EmojiRating extends LitElement {
    constructor()
    {
        super();
    }
    static get properties()
    {
        return {  loop: {type: Number}}
    }
    render() {
        return html`<p>This is an extension component using lit-element!</p>`;
      }
}

customElements.define('emoji-rating', EmojiRating);