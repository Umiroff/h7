import React from 'react'
import { useGetCategoryQuery, useDeleteCategoryMutation } from '../../context/categoryApi'
import '../categories/Categories.css'

const Categories = () => {
    let {data, isLoading, isError } = useGetCategoryQuery()
    let [deleteCategory] = useDeleteCategoryMutation()

    let categories = data?.data?.map((el, inx)=> (
        <div key={el.id} className='cat_user'>
            <p>{inx + 1}. {el.title}</p>
            <button>Delete</button>
        </div>
    ))

  return (
    <>
    <div className='cat'>
        {isLoading ? <h2>Loading...</h2> : <></>}
        
        <div>
            {categories}
        </div>
    </div>
    </>
  )
}

export default Categories