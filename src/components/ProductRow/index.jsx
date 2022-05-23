import {FlatList} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {ProductCard} from '../ProductCard'

function ProductRow({products, style}){
    const navigation = useNavigation()
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
                        onPress={()=> {
                            navigation.navigate('product', {id:item.id})
                            console.log(`Id do item: ${item.id}`)
                        }}
                        style={{margin:7}}
                    />
                )
            }}
        />
    )
}
export {ProductRow}