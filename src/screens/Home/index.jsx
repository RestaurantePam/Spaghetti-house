import {useState, useMemo} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'

import {FlatList, Text} from 'react-native'

import {products} from '../../global/data/products'
import {ProductRow} from '../../components/ProductRow'
import {SearchBar} from '../../components/SearchBar'
import {SearchResultList} from '../../components/SearchResultList'

import {SectionTitle, PageTitle, PageSubTitle, TopBanner, SearchInputArea, SearchItemsArea, SearchAreaTitle} from './styles'

function Home(){
    const [search, setSearch] = useState('')
    const searchItems = useMemo(() => {
        return products.filter(product => product.name.toUpperCase().includes(search.toUpperCase()))
    }, [search])
    return (
        <>
            
            <SafeAreaView>
                <TopBanner>
                    <PageTitle>Spaghetti house</PageTitle>
                    <PageSubTitle>
                        A melhor cozinha italiana da região
                    </PageSubTitle>
                </TopBanner>
                <SearchInputArea>
                    <SearchBar 
                        style={{marginTop: 10}}
                        onChangeText={setSearch}
                        value={search}
                    />
                </SearchInputArea>
                {(search.trim() === '') ? (
                    <>
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
                    </>
                ) : (
                    <SearchItemsArea>
                        <SearchAreaTitle>Resultados da busca "{search}"</SearchAreaTitle>
                        <SearchResultList 
                            products={searchItems}
                        />
                    </SearchItemsArea>
                )}
                
                
            </SafeAreaView>
        </>
    )
}
export {Home}