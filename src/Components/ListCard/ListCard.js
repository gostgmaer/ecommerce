import React from 'react'
import './Listcard.scss'
import {imgdata} from '../../Assets/Data/Data'
import Card from './Card'
import ProductCard from '../ProductCard/ProductCard'
const ListCard = ({catID,maxPrice,sort}) => {
  return (
    <div className='ListCard'>
        {imgdata.map((data)=>{
          
          console.log();
            return <ProductCard key={data.ID}  {...data} ></ProductCard>
        })}
    </div>
  )
}

export default ListCard