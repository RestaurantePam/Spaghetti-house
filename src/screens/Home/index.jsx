import {SafeAreaView} from 'react-native-safe-area-context'

import {products} from '../../global/data/products'
import {ProductRow} from '../../components/ProductRow'

import {SectionTitle, PageTitle, PageSubTitle, TopBanner} from './styles'

function Home(){
    return (
        <>
            <SafeAreaView>
                <TopBanner>
                    <PageTitle>Spaghetti house</PageTitle>
                    <PageSubTitle>
                        A melhor cozinha italiana da região
                    </PageSubTitle>
                </TopBanner>
                <SectionTitle>Lanches</SectionTitle>
                <ProductRow
                    style={{marginTop:20}}
                    products={products.filter(product => product.type==='snack').map(product => {
                        return {
                            description:product.description,
                            img:product.img,
                            mode:product.type,
                            price:product.price,
                            title:product.name,
                            id: product.id
                        }
                    })}
                />
                <SectionTitle>Sobremesas</SectionTitle>
                <ProductRow
                    style={{marginTop:20}}
                    products={products.filter(product => product.type==='dessert').map(product => {
                        return {
                            description:product.description,
                            img:product.img,
                            mode:product.type,
                            price:product.price,
                            title:product.name,
                            id:product.id
                        }
                    })}
                />
                
            </SafeAreaView>
        </>
    )
}
export {Home}