import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ProductInfo} from '../screens/ProductInfo'
import {Products} from '../screens/Products'

const nav = createNativeStackNavigator()

export function ProductsRoutes(){
    return (
        <nav.Navigator defaultScreenOptions={{headerShown:false}} screenOptions={{headerShown:false}}>
            <nav.Screen 
                name='list'
                component={Products}
            />
            <nav.Screen 
                name='product'
                component={ProductInfo}
            />
        </nav.Navigator>
    )
}