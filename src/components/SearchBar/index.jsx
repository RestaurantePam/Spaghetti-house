import {MaterialIcons} from '@expo/vector-icons'
import {Container, Input} from './style'

function SearchBar({style, ...textInputProps}){
    return (
        <Container style={style}>
            <Input placeholder="Insira a pesquisa..." {...textInputProps} />
            <MaterialIcons name='search' size={50} color="#848484" />
        </Container>
    )
}

export {SearchBar}