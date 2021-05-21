const initState = {
    products: [
        {id: 1, name: 'Things Fall Apart', image: 'absalom-absalom.jpg', price: 20, discount: 2, discountPrice: 20  - 2 / 100 * 20, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 2, name: 'Fairy tales', image: 'a-Dolls-house.jpg', price: 30, discount: 5, discountPrice: 30  - 5 / 100 * 30, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 3, name: 'The Divine Comedy', image: 'zorba-the-greek.jpg', price: 15, discount: 3, discountPrice: 15  - 3 / 100 * 15, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 4, name: 'The Epic Of Gilgamesh', image: 'wuthering-heights.jpg', price: 50, discount: 4, discountPrice: 50  - 4 / 100 * 50, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 5, name: 'The Book Of Job', image: 'war-and-peace.jpg', price: 25, discount: 2, discountPrice: 25  - 2 / 100 * 25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 6, name: 'One Thousand and One Nights', image: 'voyage-au-bout-de-la-nuit.jpg', price: 60, discount: 6, discountPrice: 60  - 6 / 100 * 60, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 7, name: 'Pride and Prejudice', image: 'ulysses.jpg', price: 35, discount: 2, discountPrice: 35  - 2 / 100 * 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 8, name: 'The Decameron', image: 'to-the-lighthouse.jpg', price: 80, discount: 7, discountPrice: 80  - 7 / 100 * 80, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},
        {id: 9, name: 'The Stranger', image: 'things-fall-apart.jpg', price: 95, discount: 4, discountPrice: 95  - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},        
        {id: 10, name: 'Poems', image: 'the-trial.jpg', price: 120, discount: 3, discountPrice: 120  - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?","author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",},        

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;