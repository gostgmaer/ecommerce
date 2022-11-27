import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListCard from '../../Components/ListCard/ListCard'
import './Products.scss'
const Products = () => {
  const cateid = Number(useParams().id)
  console.log(cateid);

const [maxprice, setMaxprice] = useState(1000);
const [sort, setSort] = useState(null);
  return (
    <div className='Products'>
      <div className='left'>
        <div className='filterItem'>
          <h3>Products categories</h3>
          <div className='inputItem'>
            <input type="checkbox" id='1' value={1} />
            <label htmlFor='1'>Man</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='2' value={2} />
            <label htmlFor='2'>Shose</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='3' value={3} />
            <label htmlFor='3'>women</label>
          </div>
        </div>
        <div className='filterItem'>
        <h3>Filter by Price</h3>
        <div className='inputItem'>
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxprice(e.target.value)} />
            <span>{maxprice}</span>
          </div>
        </div>
        <div className='filterItem'>
        <h3>Sort by</h3>
        <div className='inputItem'>
           
            <input type="radio" id='asc' value={'asc'} name={'price'} onChange={(e)=>setSort('asc')} />
            <label htmlFor='asc'>price (lower First)</label>
            
           
          </div>
          <div className='inputItem'>
           
           <input type="radio" id='dasc' value={'dasc'} name={'price'}  onChange={(e)=>setSort('dasc')} />
           <label htmlFor='dasc'>price (heigest First)</label>
           
          
         </div>
        </div>
      </div>
      <div className='right'>
        <img src="https://plus.unsplash.com/premium_photo-1661337201581-30cc3b2c97bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTN8fG5ldyUyMGFydHxlbnwwfDB8fHwxNjY5NDc3Nzc4&ixlib=rb-4.0.3&q=80&w=1080" className='catImg' alt="" />
        <ListCard catID= {cateid} maxPrice = {maxprice} sort = {sort} ></ListCard>
      </div>
    </div>
  )
}

export default Products