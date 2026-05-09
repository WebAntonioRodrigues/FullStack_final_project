function Button(props) {
	return (
		<button className={props.className} onClick={props.onClick}>
			<span className={props.textClassName}>{props.text}</span>
		</button>
	);
}

export default Button;
