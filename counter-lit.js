import { LitElement, html, css } from "https://cdn.skypack.dev/lit"

class Counter extends LitElement {
	static styles = css`
		div {
			color: green;
			background-color: gold;
			width: 400px;
			margin: 0rem 4rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 1.2em;
			font-weight: bold;
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
	`
    static properties = {
        count: {type:Number}
}
	constructor() {
		super()
		this.count = 5
	}

	render() {
		return html`<div>
			<div>Current Count Is: ${this.count}</div>
            <div></div>
			<button @click=${() => this.count++} class="b">COUNT</button>
		</div>`
	}
}

customElements.define("counter-lit", Counter)