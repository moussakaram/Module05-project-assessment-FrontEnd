import React from 'react'


const Product = (product) => {
    console.log(product)
  return (

    <div className="card" >
  <img className="card-img-top" src={product.imageUrl} alt="Card image cap" width={400} height={400}/>
  <div className="card-body">
  <h5 className="card-title">{product.title}</h5>
    <h5 className="card-title">{product.price}</h5>
    <p className="card-text text-danger">{product.description}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
  )
}

export default Product