type ButtonPropsType = {
    onClick: Function,
    text: string
}

function SingleTab({props}: { props: ButtonPropsType }) {

    const {text, onClick} = props

    return (
        <button onClick={() => onClick()}>
            {text}
        </button>
    )
}

export default SingleTab
