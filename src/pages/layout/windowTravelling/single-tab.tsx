import "./single-tab.scss"
import {useEffect, useState} from "react";

type TabsPropsType = {
    onClick: Function,
    text: string,
    url: string,
}

function SingleTab({props}: { props: TabsPropsType }) {

    const {text, onClick, url} = props
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        setActive(location.pathname.includes(url))
    }, [location.pathname])


    return (
        <div className={active ? "single-table active" : "single-table"} onClick={() => onClick()}>
            <h3>{text}</h3>
        </div>
    )
}

export default SingleTab