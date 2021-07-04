import React from 'react';
import './Products.css';

function Products({ products }) {
    return (
        products && products.map((product) => (
            <div key={product.idDrink} className="products-item">
                <div className="products-item__image col-4">
                    <img src={product.strDrinkThumb} alt="" />
                </div>
                <div className="products-item__content col-8">
                    <div className="products-item__content__name">{product.strDrink}</div>
                    <div className="products-item__content__cate">
                        Category <span>{product.strCategory}</span>
                    </div>
                    <div className="products-item__content__glass">
                        Glass <span>{product.strGlass}</span></div>
                    <div className="products-item__content__ing">
                        Ingredient <span>{product.strIngredient1}, {product.strIngredient2}, {product.strIngredient3}</span>
                    </div>
                    <div className="products-item__content__inst">
                        Instructions <span>
                            {product.strInstructions}
                        </span>
                    </div>
                </div>
            </div>
        ))
    )
}
export default Products;