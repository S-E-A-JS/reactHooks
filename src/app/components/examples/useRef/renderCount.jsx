import React, { useRef, useState, useEffect } from "react"
import CardWrapper from "../../common/Card"
import SmallTitle from "../../common/typografy/smallTitle"
import Divider from "../../common/divider"

function RenderCountExample() {
    const renderCount = useRef(null)
    const [otherState, setOtherState] = useState(false)
    const toggleOtherState = () => {
        setOtherState(!otherState)
    }
    useEffect(() => {
        console.log(otherState)
        renderCount.current += 1
    })

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Переключить состояние
            </button>
        </CardWrapper>
    )
}

export default RenderCountExample
