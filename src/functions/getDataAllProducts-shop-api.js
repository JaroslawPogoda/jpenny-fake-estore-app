import axios from 'axios'


export default function getDataAllProduct(setAllProducts){
    let unmodifiedData=null
    const urlAllProducts='http://api.fakeshop-api.com/products/getAllProducts'
    axios({
        method: 'get',
        url: urlAllProducts,
        responseType: 'stream'
      })
        .then(response => console.log(response))//setAllProducts(response.data))
        .catch(error => console.error(error))
        .finally(() => console.log('done'));
}