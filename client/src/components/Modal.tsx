import * as React from "react"

interface IProps {
    children: React.ReactNode,
    style?: React.CSSProperties
}

const Modal: React.SFC<IProps> = props => {
    return (
        <div style={blackScreenStyle}>
            <div style={{ ...modalStyle, ...(props.style || {}) }}>
                {props.children}
            </div>
        </div>
    )
}

const blackScreenStyle: React.CSSProperties = {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    right: "0",
    top: "0",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const modalStyle: React.CSSProperties = {
    borderRadius: '7px',
    background: "#E9EEF0",
    padding: '2rem',
}

export default Modal
