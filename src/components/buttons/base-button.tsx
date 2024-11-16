type ButtonPropsType = {
    onClick: Function,
    text: string
}

function BaseButton({props}: { props: ButtonPropsType }) {

    const {text, onClick} = props

    return (
        <button onClick={() => onClick()}>
                {text}
        </button>
    )
}

export default BaseButton
