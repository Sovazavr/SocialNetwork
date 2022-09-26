import React, { useState } from 'react'
import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookies from "universal-cookie"
import './App.css'
import 'stream-chat-react/dist/css/index.css'

import { ChannelContainer, ChannelListContainer, Auth } from './components'

const apiKey = 'zvn3jygh64e5'

const client = StreamChat.getInstance(apiKey)
const cookies = new Cookies()
const authToken = cookies.get('token')

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),



    phoneNumber: cookies.get('phoneNumber'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

const App = () => {

  const [createType, setCreateType] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  if (!authToken) {
    return <Auth />
  }
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='theme light'>
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
          setCreateType={setCreateType}
          
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
          setCreateType={setCreateType}
        />
      </Chat>
    </div>
  )
}

export default App