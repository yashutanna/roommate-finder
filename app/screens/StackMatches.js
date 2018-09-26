'use strict'

import Index                    from './Matches'
import Chat                     from './Chat'
import UserProfile              from './UserProfile'
import { StackNavigator }       from 'react-navigation'

const options = {
    header: null
}
const StackMatches = StackNavigator(
    {
        Index: {
            screen: Index
        },
        Chat: {
            screen: Chat
        },
        UserProfile: {
            screen: UserProfile
        }
    },
    {
        navigationOptions: options,
        mode: 'modal'
    }
)

module.exports = StackMatches
