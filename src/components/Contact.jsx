import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ImCircleDown } from "react-icons/im";

const Contact = () => {
	const [disabled, setDisabled] = useState(false);

	const contactForm = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"default_service",
				"template_l3k3u6q",
				contactForm.current,
				"Qi2bXyfh-OkyoyBCg"
			)
			.then(
				(result) => {
					setDisabled(true);
				},
				(error) => {
					console.log(error.text);
					setDisabled(false);
					window.alert(
						"Sorry, something went wrong. Please refresh the page and try again!"
					);
				}
			);
	};

	return (
		<section
			id="Contact"
			className="text-center my-20 min-h-[80vh] flex flex-col place-items-center place-content-around"
		>
			<h2 className="text-5xl font-bold py-4">Contact Me</h2>
			<p className="p-4">
				To get in touch, simply fill out the form and hit send!
			</p>
			<form
				ref={contactForm}
				onSubmit={sendEmail}
				className="flex flex-wrap flex-grow justify-evenly p-4 text-black border rounded-2xl w-[85vw] max-w-[600px] self-center m-auto"
			>
				<section className="p-2 w-full group">
					<label htmlFor="user_name" className="p-2">
						Name{" "}
						<ImCircleDown
							size={15}
							className="inline group-hover:text-green-600 self-start"
						/>
					</label>
					<input
						type="text"
						id="user_name"
						name="user_name"
						placeholder="Your name"
						required
						className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-green-600"
					/>
				</section>
				<section className="p-2 w-full group">
					<label htmlFor="user_email" className="p-2">
						Email{" "}
						<ImCircleDown
							size={15}
							className="inline group-hover:text-green-600 self-start"
						/>
					</label>
					<input
						type="email"
						id="user_email"
						name="user_email"
						placeholder="Your email"
						required
						className="p-2 m-auto w-full border rounded-lg group-hover:border-green-600"
					/>
				</section>
				<section className="p-2 w-full flex-grow group">
					<label htmlFor="message" className="p-2">
						Message{" "}
						<ImCircleDown
							size={15}
							className="inline group-hover:text-green-600 self-start"
						/>
					</label>
					<textarea
						name="message"
						id="message"
						placeholder="Your message"
						required
						className="p-2 border w-full h-4/5 rounded-lg group-hover:border-green-600"
					/>
				</section>
				{disabled ? (
					<p className="m-auto bg-black text-white font-bold py-2 px-6 rounded ring ring-offset-1 ring-green-600 bg-blend-saturation">
						Thanks! I&apos;ll be in touch!
					</p>
				) : (
					<input
						type="submit"
						value="Send"
						disabled={disabled}
						className="m-auto bg-black hover:scale-125 duration-300 text-white font-bold py-2 px-6 rounded focus:shadow-outline"
					/>
				)}
			</form>
		</section>
	);
};

export default Contact;
