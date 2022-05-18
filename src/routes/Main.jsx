import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import {ProductInfo} from '../screens/ProductInfo'

const stack = createNativeStackNavigator()

function MainRoutes(){
    return (
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="home" component={Home} />
            <stack.Screen name="product" component={ProductInfo} />
        </stack.Navigator>
    )
}

export {MainRoutes}