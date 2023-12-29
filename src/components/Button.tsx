interface ButtonProps {
    type: string,
    text: string
}

function Button(props: ButtonProps) {
    return (
        <>
            <div className="btn_wrapper">
                <button className={props.type}>{props.text}</button>
            </div>
        </>
    )
}

export default Button