import ContactContent from '../components/Contact/ContactContent';
import ContactHeader from '../components/Contact/ContactHeader';
import ContactSignature from '../components/Contact/ContactSignature';

function Contact() {
	return (
		<div>
			<ContactHeader></ContactHeader>
			<ContactContent></ContactContent>
			<ContactSignature></ContactSignature>
		</div>
	);
}

export default Contact;
