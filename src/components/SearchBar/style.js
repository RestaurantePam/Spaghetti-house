import styled from 'styled-components/native'

const Container = styled.View`
    background-color: #e7e7e7;
    width: 90%;
    border-radius: 8px;
    flex-direction:row;
    justify-content:space-between;
    padding: 4px;
`
const Input = styled.TextInput`
    flex:1;
    font-size: 18px;
`

export {
    Container,
    Input
}