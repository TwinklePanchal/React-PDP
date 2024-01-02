import React from 'react';
import './ProductDetailPage.css';
import Image from '../src/images/logo512.png';

const ProductDetailPage = () => {
  const product = {
    id: 1,
    name: 'Example Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    price: 29.99,
    imageUrl: 'logo512.png',
    stock : 'In Stock',
    color : 'Blue',
    productsku: 'MB01'
  };

  return (
    <div class='product-wrapper'>
      <div class='product-info'>
        <img src={product.imageUrl} alt={product.name}/>
      </div>
      <div class="product-detail">
        <h1>{product.name}</h1>
        <div class="description">{product.description}</div>
        <div class="price">${product.price.toFixed(2)}</div>
        <div class="stock">{product.stock}</div>
        <div class="color"><label>color:</label><span>{product.color}</span></div>
        <div class="sku"><label>SKU:</label><span>{product.productsku}</span></div>
        <div class="qty"><label>Quantity:</label><span><input name="qty" type="text" class="input-text qty"></input></span></div>
        <button type="submit" title="add to cart" class="btn-add-to-cart"><span>Add to cart</span></button>
      </div>
    </div>
  );
};

export default ProductDetailPage;