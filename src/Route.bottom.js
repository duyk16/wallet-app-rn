import {
  createBottomTabNavigator, createAppContainer
} from 'react-navigation'

import Home from './screens/Home'
import Explorer from './screens/Explorer'
import News from './screens/News'
import Notification from './screens/Notification'
import Settings from './screens/Settings'

const AppNavigator = createBottomTabNavigator({
  HOME: { screen: Home },
  EXPLORER: { screen: Explorer},
  NEWS: { screen: News},
  NOTIFICATION: { screen: Notification},
  SETTINGS: { screen: Settings},

})

export default createAppContainer(AppNavigator)