import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    flex:1;
    justify-content: center;
    align-items:center;
`
const Title = styled.Text`
    color: #FA1313;
    font-weight: bold;
    font-size: 24px;
`
const Message = styled.Text`
    font-size: 16px;
`

export {
    Container,
    Message,
    Title
}