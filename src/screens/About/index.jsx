import {
    Container,
    Paragraph,
    Title
} from './style'

export function About(){
    return (
        <Container>
            <Title style={{marginTop:24}}>Sobre nós</Title>
            <Paragraph>
                Somos um restaurante de culinária Italiana. Desde 2002 servimos pratos de qualidade para nossos estimados clientes.
            </Paragraph>
            <Paragraph>
                Sempre buscamos o melhor para nosso cliente, servindo pratos de qualidade e sempre buscando melhorar nossos pratos.
            </Paragraph>
        </Container>
    )
}