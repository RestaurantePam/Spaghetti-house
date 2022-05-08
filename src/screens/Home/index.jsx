import {SafeAreaView} from 'react-native-safe-area-context'

import {ProductCard} from '../../components/ProductCard'

function Home(){
    return (
        <>
            <SafeAreaView>
                <ProductCard 
                    mode="drink" 
                    title="Pizza" 
                    description="A melhor da região" 
                    price="19,99"
                    img="pizza.png"
                />
            </SafeAreaView>
        </>
    )
}
export {Home}