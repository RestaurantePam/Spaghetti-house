import styled from 'styled-components/native'

const PageTitle = styled.Text`
    font-size: 35px;
    width:100%;
    text-align:center;
    color: white;
    font-weight:bold;
    font-family:Poppins;
`
const PageSubTitle = styled.Text`
    color: #f8f8f8;
    width:100%;
    text-align:center;
    margin-top:10px;
    font-size: 17px;
    font-family:Poppins;
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

const SearchInputArea = styled.View`
    width: 100%;
    height: 100px;
    align-items:center;
`
const SearchItemsArea = styled.View`
    width: 100%;
    align-items:center;
`
const SearchAreaTitle = styled.Text`
    font-size:20px;
    font-family:Poppins;
`


export {SectionTitle, PageTitle, PageSubTitle, TopBanner, SearchInputArea, SearchItemsArea, SearchAreaTitle}