import * as React from "react"

const Modal = (props: any) => {
    return (
        <div style={blackScreenStyle}>
            <div style={modalStyle}>
                asd
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
    background: "#F2F5F8",
    maxWidth: '40rem',
    padding: '2rem',
}

export default Modal
