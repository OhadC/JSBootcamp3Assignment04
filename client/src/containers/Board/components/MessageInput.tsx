import * as React from 'react'

interface IProps {
    addMessage: (messageContent: string) => void
}

interface IState {
    inputValue: string
}

class MessageInput extends React.PureComponent<IProps, IState>{
    state = {
        inputValue: ''
    }

    inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ inputValue: event.target.value })
    }
    handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        event.stopPropagation()
        if (event.key == 'Enter' && !event.shiftKey) {
            event.preventDefault()
            this.addMessageHandler()
        }
    }

    addMessageHandler = () => {
        this.props.addMessage(this.state.inputValue.trim())
        this.setState({ inputValue: '' })
    }

    render() {
        const buttonDisabled = !this.state.inputValue.length
        const numOfRows = this.state.inputValue.split("\n").length
        return (
            <div style={styles.MessageInput}>
                <textarea value={this.state.inputValue} onChange={this.inputChangeHandler} onKeyPress={this.handleKeyPress} style={styles.input} placeholder='Type a message' rows={Math.min(numOfRows, 4)} />
                <button style={styles.button} disabled={buttonDisabled} onClick={this.addMessageHandler}>
                    Send
                </button>
            </div>
        )
    }
}

const styles: { [key: string]: React.CSSProperties } = {
    MessageInput: {
        backgroundColor: '#D3DEE1',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        flex: '1',
        border: '0',
        resize: 'none',
        // overflow: 'hidden'
    },
    button: {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
    }
}

export default MessageInput
