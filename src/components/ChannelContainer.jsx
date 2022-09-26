import React from 'react'
import { Channel, useChatContext } from 'stream-chat-react'

import { ChannelInner, CreateChannel, EditChannel } from './index'

const ChannelContainer = ({ createType, isCreating, isEditing, setIsCreating, setIsEditing }) => {
  const { channel } = useChatContext()

  if (isCreating) {
    return (
      <div className='channel__container'>
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }
  if (isEditing) {
    return (
      <div className='channel__container'>
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    )
  }

  const EmptyState = () => (
    <div className='channel-empty__container'>
      <p className='channel-empty__first'>Начало истории чата</p>
      <p className='channel-empty__second'>отправь сообщения, вложения, смайлы, ну и другое...</p>
    </div>
  )

  return (
    <div className='channel__container'>
      <Channel
        EmptyStateIndicator={EmptyState}
        
      >
      {/* Message={(messageProps, i) => <MessageSimple key={i} {...messageProps} /> */}
      {/* <VirtualizedMessageList /> */}
      <ChannelInner setIsEditing={setIsEditing} />
    </Channel>
    </div >
  )
}

export default ChannelContainer