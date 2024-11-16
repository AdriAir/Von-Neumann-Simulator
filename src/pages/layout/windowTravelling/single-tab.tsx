import "./single-tab.scss"

type ButtonPropsType = {
    onClick: Function,
    text: string
}

function SingleTab({props}: { props: ButtonPropsType }) {

    const {text, onClick} = props

    return (
        <div className="single-table" onClick={() => onClick()}>
            <h4>{text}</h4>
        </div>
    )
}

export default SingleTab