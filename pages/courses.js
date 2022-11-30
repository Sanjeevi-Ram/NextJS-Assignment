import React from 'react'
import Image from 'next/image';
import Link from "next/link";


export const getStaticProps = async () =>{
    const response = await fetch("https://fakestoreapi.com/products");  //Api Call
    const data = await response.json(); //conversion stringified to parsed JSON

    return{
        props:{
            productData : data
        }

    }
}

const courses = (props) => {
    console.log('props', props);
    const {productData} = props;
  return (
    <>
        <div className="row">
            <h1>courses Page</h1>
            {productData.map(item => (
                <div className="col-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top mb-2" height="200" src={item.image} title="Product Image" alt="Product Image" />
                            <h6>Rating: <span className="text-success">{item.rating.rate}</span></h6>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.category}</p>
                            <strong>Price: <span className="text-danger">${item.price}</span></strong>
                            <div className="mt-2"><Link href={`/batches/${item.id}`} className="btn btn-outline-dark">Go on Detail</Link></div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </>
  )
}

export default courses