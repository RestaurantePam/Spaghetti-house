import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { About } from '../screens/About'
import { Contact } from '../screens/Contact'
import { Home } from '../screens/Home'
import { ProductsRoutes } from './Products'


const stack = createBottomTabNavigator()

function MainRoutes(){
    return (
        <stack.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:'red'}}>
            <stack.Screen 
                name="home" 
                component={Home} 
                options={{
                    tabBarIcon: (props) => <Icon {...props} name="home" />,
                    tabBarLabel:'Home'
                }}
            />
            <stack.Screen 
                name="products" 
                component={ProductsRoutes}
                options={{
                    tabBarIcon: (props) => <Icon {...props} name="shopping" />,
                    tabBarLabel:'Produtos'
                }}
            />
            <stack.Screen 
                name="contact" 
                component={Contact}
                options={{
                    tabBarIcon: (props) => <Icon {...props} name="phone" />,
                    tabBarLabel:'Contato'
                }}
            />
            <stack.Screen 
                name="about" 
                component={About} 
                options={{
                    tabBarIcon: (props) => <Icon {...props} name="face-profile" />,
                    tabBarLabel:'Sobre nós'
                }}
            />
        </stack.Navigator>
    )
}

export {MainRoutes}