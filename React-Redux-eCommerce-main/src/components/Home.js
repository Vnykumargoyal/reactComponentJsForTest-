import React ,{useState,useEffect}from 'react'
import Header from "./Header"
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {Link} from "react-router-dom"
const Home = () => {
    const {products} = useSelector(state => state.ProductsReducer);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
        setSearchResults(products)
      }, [products]);
    const searchHandler = (val) => {
        // console.log(search.target.value)
        setSearch(val.target.value)
        if (search !== "") {
          const newContactList = products.filter((contact) => {
           return contact.name.toLowerCase().includes(search.toLowerCase());
          });
          setSearchResults(newContactList);
          console.log('if',searchResults)
        } else {
          setSearchResults(products);
          console.log('else',searchResults)
        }
      };
    return (
        <div>
            <Header />
            <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" onChange={(val)=>searchHandler(val)}/>
                    </div>
                </div>
            <div className="container">
               
                <div className="row">
                    {searchResults.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`}><img src={`/images/${product.image}`} alt="image name"/></Link>
                                </div>
                                <div className="product__name">
                                    {product.name}
                                </div>
                                <div className="product__name">
                                    {product.author}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                    <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span className="discount">{product.discount}%</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">
                                        {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
