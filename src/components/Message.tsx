import * as React from 'react'

import './Message.css'

// interface IMessageProps {

// }

const Message = (props: any) => {
    return (
        <li>
            <div className={['message', props.selfMessage ? 'self' : ''].join(' ')}>
                {props.content}
            </div>
        </li>
    )
}

export default Message
