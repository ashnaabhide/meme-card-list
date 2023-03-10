import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const meme=new URL('../assets/meme.jpg', import.meta.url).href;


export class MemeCard extends LitElement {

  static get properties() {
    return {
      bgcolorchange: {
        type: Boolean,
        reflect: true
      },
      name: {
        type: String,
        reflect: true
      }, 
      detail: {
        type: String,
      }
    }
  }


  static get styles(){
    return css`
    :host([bgcolorchange]) .all {
      background-color: var(--c, purple); //no naming conventions for css variables (make them descriptive)
    }
      .wrapper {
        width: 400px;
        border: 2px solid black;
        display: inline-flex; 
      }

.image {
  width: 400px;
}

.header {
  text-align: center;
  font-weight: bold;
  font-size: 2rem; /* scales relatively */
  
  
}

.header h3:hover {
  font-style: italic; 
  font-size: 1.1em;
}

.header h3, 
.header h4{
  transition: .3s ease-in-out all;
  margin: 16px;
  font-style: normal;
  
}
.buttons button:focus, 
.buttons button:hover {
  background-color: rgba(200, 0, 50, .5);
}
/*
.buttons button:active {
  background-color: rgba(200, 0, 200, .5); - shades in the part of the project you're not actively working on
}
*/
 
.buttons {
  display: block;
  
}
button {
  padding: 12px;
  font-size: 32px;
}



details{
  margin-left: 24px;
  padding: 10px;
}
.details summary {
  font-size: 20px;
  font-weight: bold;
  
}

@media only screen and (max-width: 1200px){
  .wrapper{
    background-color: pink;
  }
}
@media only screen and (max-width: 600px){
   .wrapper{
    background-color: purple;
  }
  
}
@media only screen and (max-width: 425px){
   .wrapper{
    font-size: 1em;
  }
  details {
    display: none;
  }
  .wrapper{
    font-size: 1.1em; /*this will take priority*/
  }
}
    `;
  }


  constructor() {
    super();
    this.name = "Borzoi!!!!";
    this.detail = "big nose dog";
    this.bgcolorchange = "true";
    
  }

  render() {
    return html`
    
<div class="wrapper">
  <div class="container">
  <meme-maker slot="borzoi meme" image-url="${meme}"
 top-text="BORZOI" bottom-text="woof. ">
</meme-maker>
<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
  <h3>${this.name}</h3>
  <h4>${this.detail}</h4>
    <details class="details">
      <summary>Details</summary>
      <div>
        <slot name="paragraph">The magnificent borzoi! Look how  disproportionate its nose is. Marvelous. </slot>
      
      </div>
  </details>
  </div>
</div>
</div>
    `;
  }
}

customElements.define('meme-card-ashnaa', MemeCard);