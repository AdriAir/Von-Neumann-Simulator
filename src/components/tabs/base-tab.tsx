type ButtonPropsType = {
    onClick: Function,
    text: string
}

function BaseTab({props}: { props: ButtonPropsType }) {

    const {text, onClick} = props

    return (
        <button onClick={() => onClick()}>
            {text}
        </button>
    )
}

export default BaseTab
