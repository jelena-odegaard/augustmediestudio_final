import Heading from "../layout/Heading";
import ContactForm from "../contact/ContactForm";

export default function Contact() {
	return <>
		<div className="contact-container">
			<Heading content="Hvordan kan vi hjelpe deg?" />
			<h2>Ta gjerne kontakt!</h2>
			<div className="contact-wrapper">
				<div className="contactform-container">
					<ContactForm/>
				</div>
				<div className="address-container">
				<iframe title="google map address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2051.8625587631623!2d10.005519016061061!3d59.05101378156236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646e9afd3c5ccf1%3A0xda43593c9edcf878!2s%C3%98vregata%207%2C%203264%20Larvik!5e0!3m2!1sno!2sno!4v1621963758420!5m2!1sno!2sno" width="400" height="350" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
					<div className="address">
						<p>August mediestudio</p>
						<p>Øvregata 7</p>
						<p>3264 Larvik</p>
						<p>augustmediestudio@gmail.com</p>
						<p>(+47)911 53 506</p>
					</div>
				</div>
			</div>
		</div>
		</>
}