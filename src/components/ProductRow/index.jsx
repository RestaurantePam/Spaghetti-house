import {FlatList} from 'react-native'

import {ProductCard} from '../ProductCard'

function ProductRow({products, style}){
    return (
        <FlatList
            style={style}
            data={products}
            keyExtractor={(item) => item.id}
            horizontal

            renderItem={({item}) => {
                return (
                    <ProductCard
                        {...item}
                        key={item.id}
                        style={{margin:7}}
                    />
                )
            }}
        />
    )
}
export {ProductRow}