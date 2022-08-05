import {SearchResultCard} from '../SearchResultCard'

import {StyledList} from './styles'

import {useNavigation} from '@react-navigation/native'
import { View } from 'react-native'

function SearchResultList({products}){
    const {navigate} = useNavigation()
    return (
        <View>
            {products.map(product => {
                return <SearchResultCard 
                    description={product.description}
                    img={product.img}
                    mode={product.type}
                    style={{margin:5}}
                    onPress={() => {
                        navigate('product', {id:product.id})
                    }}
                    price={product.price}
                    title={product.name}
                    key={product.id}
                />
            })}
        </View>
    )
}

export {SearchResultList}