
interface StateProps {
    type: string,
    text: string
    icon: string,
}

function StateBlock(props: StateProps) {

    return (
        <>
            <div className={props.type}>
                <span>{props.text}</span>
                <img src={props.icon} />
            </div>
        </>
    )
}

export default StateBlock