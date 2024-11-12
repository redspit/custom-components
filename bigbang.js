//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement("template")
template.innerHTML = `
  <div>
    <slot name="list"></slot>
    <h1>Big Bang Theory</h1>
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
`


class BigBang extends HTMLElement {
	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: "closed" })
		let div = document.createElement('div');
        div.textContent = 'Big Bang Theory';
        shadowRoot.append(div);
        let btn = document.createElement("button")
        btn.textContent = "press me"
        btn.classList.add('b')
        btn.addEventListener('click', function () { console.log("hi") })
        shadowRoot.append(btn)
        // div.innerHTML = `<button class='b'>Hello</button>`
		// let clone = template.content.cloneNode(true)
		// shadowRoot.append(clone)
	}
}

customElements.define("big-bang", BigBang)
// <big-bang>
