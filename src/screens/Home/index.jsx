import {Text} from 'react-native'

import {
    Container,
    Message,
    Title
} from './style'

export function Home(){
    return (
        <Container>
            <Title>Bem vindo ao Spaghetti house!</Title>
            <Message>Veja nossa aba de produtos</Message>
            <Message>Saiba mais sobre nós na aba sobre nós</Message>
            <Message>Contate-nos na aba de contato</Message>
        </Container>
    )
}