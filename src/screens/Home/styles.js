import styled from 'styled-components/native'

const PageTitle = styled.Text`
    font-size: 35px;
    width:100%;
    text-align:center;
    color: white;
`
const PageSubTitle = styled.Text`
    color: #f8f8f8;
    width:100%;
    text-align:center;
    margin-top:10px;
`

const SectionTitle = styled.Text`
    font-size: 25px;
    margin-left:5px;
`

const TopBanner = styled.View`
    width: 100%;
    height: 120px;
    background-color:#FA1313;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`


export {SectionTitle, PageTitle, PageSubTitle, TopBanner}