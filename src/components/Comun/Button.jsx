function Button(props) {
	return (
		<button className={props.className}>
			<span className={props.textClassName}>{props.text}</span>
		</button>
	);
}

export default Button;
