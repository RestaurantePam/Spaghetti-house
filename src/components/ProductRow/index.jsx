import {FlatList} from 'react-native'

import {ProductCard} from '../ProductCard'

function ProductRow({products}){
    return (
        <FlatList 
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return (
                    <ProductCard 
                        {...item}
                    />
                )
            }}
        />
    )
}
export {ProductRow}