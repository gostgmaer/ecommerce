import React from 'react'
import './Listcard.scss'
import {imgdata} from '../../Assets/Data/Data'
import Card from './Card'
import ProductCard from '../ProductCard/ProductCard'
import useFetch from '../../Hooks/UseFetch'
const ListCard = ({catID,maxPrice,sort,SubCategories}) => {




  const { products, loading, error } = useFetch(
    `products`,
    "get",
    "",
    {
      populate: "*",
      "[filters][categories][id]": catID
    },
    "",
    ""
  );

  // console.log(products);



  return (
    <div className='ListCard'>
        { loading?'': products?.map((data)=>{
          
          console.log();
            return <ProductCard key={data.id}  id={data.id} {...data.attributes} ></ProductCard>
        })}
    </div>
  )
}

export default ListCard