import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { About } from '../screens/About'
import { Contact } from '../screens/Contact'
import { Home } from '../screens/Home'
import { ProductsRoutes } from './Products'


const stack = createBottomTabNavigator()

function MainRoutes(){
    return (
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen 
                name="home" 
                component={Home} 
                options={{tabBarIcon: (props) => <Icon {...props} name="home" />}}
            />
            <stack.Screen 
                name="products" 
                component={ProductsRoutes}
                options={{tabBarIcon: (props) => <Icon {...props} name="shopping" />}}
            />
            <stack.Screen 
                name="contact" 
                component={Contact}
                options={{tabBarIcon: (props) => <Icon {...props} name="phone" />}}
            />
            <stack.Screen 
                name="about" 
                component={About} 
                options={{tabBarIcon: (props) => <Icon {...props} name="face-profile" />}}
            />
        </stack.Navigator>
    )
}

export {MainRoutes}