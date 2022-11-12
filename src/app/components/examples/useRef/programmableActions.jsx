import React, { useRef } from "react"
import CardWrapper from "../../common/Card"
import SmallTitle from "../../common/typografy/smallTitle"
import Divider from "../../common/divider"

function ProgrammableActionsExample() {
    const inputRef = useRef()
    const handleClick = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px"
    }
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Focus input
            </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Change width
            </button>
        </CardWrapper>
    )
}

export default ProgrammableActionsExample
