import {Button} from 'react-native'
import {getProductInfo} from '../../lib/getProductInfo'

import {Banner, Container, Info, Price, Title} from './styles'

function ProductInfo({route, navigation}){
    const productId = route.params.id
    const productInfo = getProductInfo(productId)
    return (
        <Container>
            <Banner source={productInfo.img} style={{width:'100%', height:200, resizeMode:'cover'}} />
            <Title>{productInfo.name}</Title>
            <Info>{productInfo.info}</Info>
            <Price>Preço: {productInfo.price}</Price>
            <Button onPress={navigation.goBack} title="Voltar" />
        </Container>
    )
}

export {ProductInfo}