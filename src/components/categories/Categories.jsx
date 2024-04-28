import React from 'react'
import { useGetCategoryQuery, useDeleteCategoryMutation } from '../../context/categoryApi'
import '../categories/Categories.css'

const Categories = () => {
    let {data, isLoading, isError } = useGetCategoryQuery()
    let [deleteCategory] = useDeleteCategoryMutation()
    
    const handleDelete = (id) => {
        deleteCategory(id)
    }

    let categories = data?.data?.map((el, inx)=> (
        <div key={el.id} className='cat_user'>
            <p>{inx + 1}. {el.title}</p>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
    ))

  return (
    <>
    <div className='cat'>
        {isLoading ? <h2>Loading...</h2> : <></>}
        
        <div className='cat_cards'>
            {categories}
        </div>
    </div>
    </>
  )
}

export default Categories