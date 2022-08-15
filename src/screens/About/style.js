import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
`
const Title = styled.Text`
    color: #FA1313;
    font-size: 24px;
    font-weight:bold;
`
const Paragraph = styled.Text`
    font-size: 16px;
`

export {
    Container,
    Paragraph,
    Title
}