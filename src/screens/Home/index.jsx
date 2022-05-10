import {SafeAreaView} from 'react-native-safe-area-context'

import {products} from '../../global/data/products'
import {ProductRow} from '../../components/ProductRow'

function Home(){
    return (
        <>
            <SafeAreaView>
                <ProductRow 
                    products={products.map(product => {
                        return {
                            description:product.description,
                            img:product.img,
                            mode:product.type,
                            price:product.price,
                            title:product.name
                        }
                    })}
                />
                
            </SafeAreaView>
        </>
    )
}
export {Home}