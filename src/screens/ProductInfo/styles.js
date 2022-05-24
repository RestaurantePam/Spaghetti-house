import styled from 'styled-components/native'

const Title = styled.Text`
    font-size:30px;
    width:100%;
    text-align:center;
    font-weight:bold;
    color: rgb(255, 255, 255);
    transform:translateY(-20px);
    font-family:Poppins;
`
const Info = styled.Text`
    font-size:18px;
    color: rgb(35, 35, 35);
    padding: 15px;
    font-family:Poppins;
`
const Price = styled.Text`
    font-size: 18px;
    color:#11d144;
    width:100%;
    text-align:right;
    font-family:Poppins;
    font-weight:bold;
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
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    justify-content:center ;
    height:40px;
    width: 100%;
`
const BackButtonText = styled.Text`
    font-weight: bold;
    font-size:20px;
    width:100%;
    text-align:center;
    color:white;
    font-family:Poppins;
`

export {InfoSection, BannerSection, Title, Info, Price, Banner, BackButton, BackButtonText}