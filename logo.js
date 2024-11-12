


const template = document.createElement("template")
template.innerHTML = `
<style>
@import url("./main.css")
</style>
    <button id="btn" class='b' part="btn">
    <slot name="title" class='a'>Login</slot>
    </button>
`

class LogoButton extends HTMLElement {

	constructor() {
		super()
		console.log(this)
		const shadowRoot = this.attachShadow({ mode: "closed" })
        shadowRoot.append(template.content.cloneNode(true))
		document.addEventListener("DOMContentLoaded", () => {
            let btn = shadowRoot.getElementById("btn")
			btn.addEventListener("click", function () {
				alert("Login")
			})
		})
	}
	connectedCallback() {
		console.log('component is mounted');	
	}
	disconnectedCallback() {
		console.log('component is removed');	
	}
}

customElements.define("logo-b", LogoButton)
