import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class FirstComponent extends PolymerElement {
    static get template() {
        return html `
           <h1>[[title]]</h1>
        `;
    }
    static get properties() {
        return {
          title: {
            type: String,
            value: 'First component!'
          }
        };
    }
    constructor(){
        super();
    }
}
window.customElements.define('first-component', FirstComponent);