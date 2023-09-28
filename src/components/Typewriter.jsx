import React from "react";

class TypeWriter extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
		};

		this.typeStuff = this.typeStuff.bind(this);
	}

	componentDidMount() {
		this.unmounted = false;
		this.loopNum = 0;
		this.isDeleting = false;
		this.typeStuff();
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	typeStuff() {
		if (this.unmounted) {
			return;
		}

		const { data: strArray } = this.props;
		const i = this.loopNum % strArray.length;
		const fullText = strArray[i];

		let newText = "";
		if (this.isDeleting) {
			newText = fullText.substring(0, this.state.text.length - 1);
		} else {
			newText = fullText.substring(0, this.state.text.length + 1);
		}

		let delta = 250 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && newText === fullText) {
			setTimeout(() => {
				this.isDeleting = true;
			}, 1000);
		} else if (this.isDeleting && newText === "") {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		this.setState({ text: newText });

		setTimeout(() => {
			this.typeStuff();
		}, delta);
	}

	render() {
		return this.state.text ? (
			<p id="typewriter" className="p-2 text-center text-xl">
				{this.state.text}
			</p>
		) : (
			<p className="p-2 text-center text-xl">&nbsp;</p>
		);
	}
}

export default TypeWriter;
