import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
					console.log(result.text);
					console.log(result);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section
			id="Contact"
			className="text-center my-20 min-h-[80vh] flex flex-col place-items-center place-content-around"
		>
			<h2 className="text-5xl font-bold py-12">Contact Me</h2>
			<p>To get in touch, simply fill out the form and hit send!</p>
			<form
				ref={contactForm}
				onSubmit={sendEmail}
				className="flex flex-wrap justify-evenly p-2 text-black border rounded-2xl w-[85vw] max-w-[600px] self-center m-auto"
			>
				<section className="p-4">
					<label className="p-2">Name: </label>
					<input
						type="text"
						name="user_name"
						placeholder="Your name"
						required
						className="p-2 m-auto flex-grow border rounded-lg"
					/>
				</section>
				<section className="p-4">
					<label className="p-2">Email: </label>
					<input
						type="email"
						name="user_email"
						placeholder="Your email"
						required
						className="p-2 m-auto flex-grow border rounded-lg"
					/>
				</section>
				<section className="p-4 w-full flex">
					<label className="p-2">Message: </label>
					<textarea
						name="message"
						placeholder="Your message"
						required
						className="p-2 border flex-grow rounded-lg"
					/>
				</section>
				<input
					type="submit"
					value="Send"
					className="m-auto  bg-black hover:scale-125 duration-300 text-white font-bold py-2 px-6 rounded focus:shadow-outline"
				/>
			</form>
		</section>
	);
};

export default Contact;
