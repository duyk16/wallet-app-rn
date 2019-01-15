import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './screens/Home'

const AppNavigator = createStackNavigator({
  HOME: { screen: Home }
})

export default createAppContainer(AppNavigator)