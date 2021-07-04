import React, { useState, useEffect, useRef } from 'react';

import Products from './components/Products/Products';
import Loading from './components/Loading/Loading';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState(null);
  const inputQueryParams = useRef('');
  const defaultQueryParams = 'a';
  const domain = 'https://www.thecocktaildb.com';
  const endpoint = '/api/json/v1/1/search.php?s=';

  const getAllProducts = async (value) => {
    setLoading(true);
    try {
      const response = await fetch(`${domain}${endpoint}${value}`);
      const products = await response.json();
      setProducts(products.drinks);
      setLoading(false);
    }
    catch (err) {
      setProducts(null);
      alert(err.message);
      setLoading(false);
    }
  }

  const handleSearchInput = () => {
    setQueryParams(inputQueryParams.current.value);
  }

  useEffect(() => {
    if (queryParams) {
      getAllProducts(queryParams);
    } else {
      getAllProducts(defaultQueryParams);
    }
  }, [queryParams])

  return (
    <div id="productList" className="container">
      <div className="introduce">
        Welcome <span className="introduce_name">Bảo</span>
      </div>

      <form>
        <input type="text" placeholder="Search.." ref={inputQueryParams} />
        <button type="button" onClick={handleSearchInput}>Search</button>
      </form>
      {
        loading ?
          <Loading />
          :
          <>
            <div className="open_paragraph">
              {products ?
                <span>Chúng tôi có {products.length} món. Mời bạn chọn nhé</span> :
                <span>Không có kết quả nào cho "{queryParams}"</span>}
            </div>
            <Products products={products} />
          </>
      }
    </div>
  )
}
export default App;