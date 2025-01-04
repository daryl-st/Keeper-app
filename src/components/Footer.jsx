function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<p>&copy; Copyright, { year } . Darnell</p>
		</footer>
	);
}

export default Footer;