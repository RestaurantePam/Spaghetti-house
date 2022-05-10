import {SafeAreaView} from 'react-native-safe-area-context'

import {products} from '../../global/data/products'
import {ProductRow} from '../../components/ProductRow'

import {SectionTitle} from './styles'

function Home(){
    return (
        <>
            <SafeAreaView>
                <SectionTitle>Lanches</SectionTitle>
                <ProductRow
                    products={products.filter(product => product.type==='snack').map(product => {
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