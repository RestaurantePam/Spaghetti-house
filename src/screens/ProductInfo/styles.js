import styled from 'styled-components/native'

const Title = styled.Text`
    font-size:30px;
    width:100%;
    text-align:center;
    font-weight:bold;
    color: rgb(255, 255, 255);
    transform:translateY(-20px);
`
const Info = styled.Text`
    font-size:18px;
    color: rgb(35, 35, 35);
    padding: 15px;
`
const Price = styled.Text`
    font-size: 18px;
    color:#54FF38;
    width:100%;
    text-align:right;
`
const BannerSection = styled.View`
    background-color:red ;
    width: 100%;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
`
const InfoSection = styled.View`
    flex-grow:1;
    width: 100%;
`
const Banner = styled.Image`
    width:100%;
    height: 300px;
`

const BackButton = styled.TouchableOpacity`
    background-color: #FA1313;
    border-radius: 4px;
    justify-content:center ;
    height:40px;
    width: 100%;
    font-size: 30px;
`
const BackButtonText = styled.Text`
    font-weight: bold;
    font-size:20px;
    width:100%;
    text-align:center;
    color:white;
`

export {InfoSection, BannerSection, Title, Info, Price, Banner, BackButton, BackButtonText}