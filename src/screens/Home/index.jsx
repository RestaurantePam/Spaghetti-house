import {View, Text} from 'react-native'

import {SafeAreaView} from 'react-native-safe-area-context'

function Home(){
    return (
        <>
            <SafeAreaView>
                <Text>Bem vindo(a)!</Text>
            </SafeAreaView>
        </>
    )
}
export {Home}