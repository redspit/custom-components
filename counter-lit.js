import { LitElement, html, css } from "https://cdn.skypack.dev/lit"

class Counter extends LitElement {
	static styles = css`
		div {
			color: green;
			background-color: #141414FF;
			border-radius: 15px;
			width: 600px;
			margin: 0rem 4rem;
			padding: 1.2rem 0rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 1.2em;
			font-weight: bold;
		}
		.b {
			border-radius: 5px;
			border:0;
			/*border-color: white;*/
			background-color: peru;
			padding: 8px 40px;
			box-shadow: 0 0 0 white;
		}

		.b:hover {
			opacity: 0.9;
			cursor: pointer;
			box-shadow: 3px 3px 5px gold;
		}
		.a {
			background-color: #b9b4b9ff;
		}
		.container {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 15px;
		}
	`
	static properties = {
		count: { type: Number },
		total: { type: String },
	}
	constructor() {
		super()
		this.count = 0
		this.total = "Total"
	}

	render() {
		return html`<div>
			<div>The Current ${this.total} Is: ${this.count}</div>
			<div class="container">
				<button
					@click=${() => {
						this.count++
						this.total = "Total with discount"
					}}
					class="b"
				>
					COUNT
				</button>
				<button
					@click=${() => {
						this.count = 0
						this.total = "Total"
					}}
					class="b a"
				>
					Reset
				</button>
			</div>
		</div>`
	}
}

customElements.define("counter-lit", Counter)
