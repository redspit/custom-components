


const template = document.createElement("template")
template.innerHTML = `
<style>
.count {
	background-color: gold;
	margin: 1rem 4rem;
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.b {
	border-radius: 5px;
	border-color: green;
	background-color: peru;
	padding: 8px 40px;
}

.b:hover {
	opacity: 0.5;
	cursor: pointer;
}
</style>
<div class="count">
    <button id="btn" class='b' >COUNT</button>
    <h3 id="value">0</h3>
    </div>
`

class CounterDiv extends HTMLElement {
	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: "closed" })
		shadowRoot.append(template.content.cloneNode(true))
		this.count = 0
		this.btn = shadowRoot.getElementById("btn")
		this.div = shadowRoot.getElementById("value")
		this.btn.addEventListener("click", this)
	}
	/**
	 *
	 * @param {Event} event The event object
	 * @param {count} number count number
	 */
	handleEvent(event) {
		this.count++
		this.div.textContent = `${this.count}`
	}
}

customElements.define("counter-div", CounterDiv)
