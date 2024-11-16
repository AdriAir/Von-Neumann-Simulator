function BaseButton({text, children, ...props}: { text: string }) {

    return (
        <button {...props}>
            {text}
        </button>
    )
}

export default BaseButton
