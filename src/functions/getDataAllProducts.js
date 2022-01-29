import axios from 'axios'


export default function getDataAllProduct(setAllProducts){
    const urlAllProducts='https://fakestoreapi.com/products'
    axios({
        method: 'get',
        url: urlAllProducts,
        responseType: 'stream'
      })
        .then(response => setAllProducts(response.data))
        .catch(error => console.error(error))
        .finally(() => console.log('done'));
}