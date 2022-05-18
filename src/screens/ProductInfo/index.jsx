import {View, Text} from 'react-native'

function ProductInfo({route}){
    return (
        <View>
            <Text>{route.params.id}</Text>
            <Text>Informações do produto</Text>
        </View>
    )
}

export {ProductInfo}