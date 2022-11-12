import { React, useCallback, useEffect, useRef, useState } from "react"
import CardWrapper from "../../common/Card"
import SmallTitle from "../../common/typografy/smallTitle"

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withoutCallback = useRef(0)
    const withCallback = useRef(0)

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    //whithout
    const validateWithCallback = useCallback((data) => {
        console.log(data)
    }, [])
    useEffect(() => {
        withCallback.current++
    }, [validateWithCallback])

    //with
    const validateWithOutCallback = (data) => {
        console.log(data)
    }
    useEffect(() => {
        withoutCallback.current++
    }, [validateWithOutCallback])

    useEffect(() => {
        validateWithCallback(data)
        validateWithOutCallback(data)
    }, [data])

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withoutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    )
}

export default UseCallBackExample
