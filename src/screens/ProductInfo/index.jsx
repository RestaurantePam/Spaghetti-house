import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import {getProductInfo} from '../../lib/getProductInfo'

import {Banner, Info, Price, Title, InfoSection, BannerSection, BackButton, BackButtonText} from './styles'

function ProductInfo({route, navigation}){
    const productId = route.params.id
    const productInfo = getProductInfo(productId)
    return (
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
            <BannerSection>
                <Banner source={productInfo.img} style={{resizeMode:'cover'}} />
                <Title>{productInfo.name}</Title>
            </BannerSection>
            <InfoSection>
                <Info>{productInfo.info}</Info>
                <Price>R${productInfo.price}</Price>
            </InfoSection>
            <BackButton onPress={navigation.goBack}>
                <BackButtonText>Voltar</BackButtonText>
            </BackButton>
        </SafeAreaView>
    )
}

export {ProductInfo}