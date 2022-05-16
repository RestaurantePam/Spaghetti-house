import {LinearGradient} from 'expo-linear-gradient'
import {StyleSheet} from 'react-native'

import {Container, Description, Price, Title, TopSection, ProductImage} from './styles'

const styles = StyleSheet.create({
    gradientBg: {
        flex:1,
        borderRadius: 15
    }
})

const bgColorsByMode = {
    'snack':['#FF2E00', '#FE0000'],
    'drink':['#0085FF', '#2400FE'],
    'dessert':['#7000FF', '#DA00FE']
}

function getBgColor(mode){
    return bgColorsByMode[mode]? bgColorsByMode[mode] : bgColorsByMode['snack']
}

function ProductCard({title, description, price, img, mode, style}){
    const priceParts = price.split(',')
    return (
        <Container style={style}>
            <LinearGradient 
                colors={getBgColor(mode)} 
                style={styles.gradientBg}
                start={[1, 0]}
                end={[0, 1]}
            >

                <TopSection>
                    <ProductImage 
                        source={img}
                    />
                    <Price>
                        {priceParts[0]}, {'\n'}
                        {priceParts[1]} {'\n'}
                    </Price>
                </TopSection>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </LinearGradient>
        </Container>
    )
}
export {ProductCard}