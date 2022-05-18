import {products} from '../global/data/products'

function getProductInfo(productId){
    return products.filter(product => product.id === productId)[0]
}
export {getProductInfo}