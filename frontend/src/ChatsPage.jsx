import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '43c3f588-544f-46d6-98e8-7ec1ca9efb78', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
    </div>
    )
}

export default ChatsPage