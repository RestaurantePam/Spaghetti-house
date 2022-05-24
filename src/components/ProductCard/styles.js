import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
    width: 200px;
    height: 158px;
    border-radius: 15px;
    background-color: red;
`

const Title = styled.Text`
    color: white;
    font-weight:bold;
    font-size: 16px;
    font-weight:500;
    width: 80%;
    text-align:right;
    font-family:Poppins;
`
const Description = styled.Text`
    color:#ffffffcc;
    font-size:9px;
    width:80%;
    text-align:right;
    font-family:Poppins;
`
const Price = styled.Text`
    color:#54FF38;
    font-size:30px;
    font-weight: 500;
    width:100%;
    text-align: right;
    font-family:Poppins;
`
const ProductImage = styled.Image`
    width:130px;
    height: 130px;
    position:absolute;
    top: -20px;
    left:-20px;
`
const TopSection = styled.View`
    flex-direction:row;
    height: 90px;
`

export {
    Container,
    Title, 
    Description, 
    Price, 
    TopSection,
    ProductImage
}