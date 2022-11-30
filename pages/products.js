import React from 'react'

export const getServerSideProps = async () =>{
  const response = await fetch("https://fakestoreapi.com/products");  //Api Call
  const data = await response.json(); //conversion stringified to parsed JSON

  return{
      props:{
          productData : data
      }

  }
}

const products = (props) => {
  const {productData} = props;
  return (
    <>
        <div>Products</div>
        <div className="container">
            <div className='row'>
                {productData.map(item => (
                    <div className="col-3 mb-3">
                        <div className='card card-body'>                        
                            <img className='card-img-top mb-2' src={item.image} width="250" height="300" />                        
                            <strong>Price: <span className="text-danger align-center text-dark">₹{item.price}</span></strong>
                            <h5 className="card-title text-dark">{item.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default products