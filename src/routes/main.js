import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home'

const stack = createNativeStackNavigator()

function MainRoutes(){
    return (
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="home" component={Home} />
        </stack.Navigator>
    )
}

export {MainRoutes}