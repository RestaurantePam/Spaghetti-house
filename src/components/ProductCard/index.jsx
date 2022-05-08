import {Container, Description, Price, Title, TopSection, ProductImage} from './styles'

function ProductCard({title, description, price, img}){
    const staticImg = 'pizza.png'
    const imgPath = `../../assets/products/${staticImg}`

    const priceParts = price.split(',')
    return (
        <Container>
            <TopSection>
                <ProductImage 
                    source={require(imgPath)}
                />
                <Price>
                    {priceParts[0]}, {'\n'}
                    {priceParts[1]} {'\n'}
                </Price>
            </TopSection>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}
export {ProductCard}