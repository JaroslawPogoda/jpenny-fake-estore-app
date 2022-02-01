import axios from 'axios'


export default function getDataAllProductShopAPI(setAllProducts){
  

const options = {
  method: 'GET',
  url: 'https://fake-user-list-test.p.rapidapi.com/users',
  headers: {
    'x-rapidapi-key': 'd12b911398mshdc5ec55b0c74626p12dddbjsn4438b67beec7',
    'x-rapidapi-host': 'fake-user-list-test.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}