

export default function addToCart(){
    fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    products:[{productId:5,quantity:1},{productId:1,quantity:5}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}