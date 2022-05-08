import {FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {ProductCard} from '../../components/ProductCard'

import {products} from '../../global/data/products'

function Home(){
    return (
        <>
            <SafeAreaView>
                <FlatList 
                    data={products}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => {
                        return (
                            <ProductCard 
                                img={item.img}
                                description={item.description}
                                mode={item.type}
                                price={item.price}
                                title={item.name}
                            />
                        )
                    }}
                />
                
            </SafeAreaView>
        </>
    )
}
export {Home}