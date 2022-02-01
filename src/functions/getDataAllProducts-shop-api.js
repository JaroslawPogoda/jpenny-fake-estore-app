import axios from 'axios'
const SerpApi = require('google-search-results-nodejs');


export default function getDataAllProductShopAPI(setAllProducts){
  
  const search = new SerpApi.GoogleSearch("secret_api_key");
  
  const params = {
    engine: "google_product",
    product_id: "4172129135583325756",
    gl: "us",
    hl: "en"
  };
  
  const callback = function(data) {
    console.log(data['product_results']);
  };
  
  // Show result as JSON
  search.json(params, callback);
}