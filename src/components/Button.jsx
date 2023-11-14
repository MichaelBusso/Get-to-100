const Button = (props) => {
    return (
        <button onClick={props.action}>{props.value}</button>
    )
}

export default Button;