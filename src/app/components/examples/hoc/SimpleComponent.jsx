import React from "react"
import PropTypes from "prop-types"

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    console.log("isAuth", isAuth)
    return (
        <>
            {isAuth ? (
                <button onClick={onLogOut}>Выйти из системы</button>
            ) : (
                <button onClick={onLogin}>Войти</button>
            )}
        </>
    )
}
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string,
}

export default SimpleComponent
