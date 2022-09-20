import React from 'react'
import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"
import Cookies from "universal-cookie"
import './App.css'

import {ChannelContainer, ChannelListContainer, Auth} from './components'

const apiKey= 'zvn3jygh64e5'

const client=StreamChat.getInstance(apiKey)

const authToken=false

const App = () => {
  if(!authToken) {
    return <Auth/>
  }
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='theme light'>
            <ChannelListContainer/>
            <ChannelContainer/>
        </Chat>        
    </div>
  )
}

export default App