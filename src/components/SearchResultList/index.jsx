import {SearchResultCard} from '../SearchResultCard'

import {StyledList} from './styles'

import {useNavigation} from '@react-navigation/native'

function SearchResultList({products}){
    const {navigate} = useNavigation()
    return (
        <StyledList 
            data={products}
            keyExtractor={product => product.id}
            contentContainerStyle={{alignItems:'center'}}
            renderItem={({item}) => {
                return (
                    <SearchResultCard 
                        description={item.description}
                        style={{margin:5}}
                        img={item.img}
                        mode={item.type}
                        onPress={() => {
                            navigate('product', {id:item.id})
                        }}
                        price={item.price}
                        title={item.name}
                    />
                )
            }}

            style={{width:'100%'}}
        />
    )
}

export {SearchResultList}