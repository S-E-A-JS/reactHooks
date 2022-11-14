import React from "react"
import CollapseWrapper from "../common/collapse"
import PropTypes from "prop-types"

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        console.log(child)
        const config = {
            id: i + 1,
        }
        return React.cloneElement(child, config)
    })
    // const exampl = React.Children.toArray(children)
    // console.log(exampl)
    // return exampl.map((child) => {
    //     child.charCodeAt
    // })
}

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    )
}

const Component = ({ id }) => {
    return <div>Компонент списка {id}</div>
}
Component.propTypes = {
    id: PropTypes.number,
}

export default ChildrenExercise
