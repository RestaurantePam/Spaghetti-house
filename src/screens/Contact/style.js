import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    justify-content:center;
`
const Title = styled.Text`
    color: #FA1313;
    font-size:24px;
`
const Text = styled.Text`
    width: 80%;
    text-align:left;
    font-size:16px;
`

export {
    Container,
    Text,
    Title
}