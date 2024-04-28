import React, { useRef } from 'react'
import { useCreateCategoryMutation, useGetCategoryQuery } from '../../context/categoryApi'
import '../signup/SignUp.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

function SignUp() {
    let {data, isError} = useGetCategoryQuery()
    let [createCategory] = useCreateCategoryMutation()

    let user = useRef()

    const handleUser = e => {
        e.preventDefault()
        let category = {
            title: user.current.value
        }
        createCategory(category)
        user.current.value = ''
    }
  return (
    <>
    <Navbar />
    <div className='signup'>
        <form action="" onSubmit={handleUser}>
            <p>Sign Up</p>
            <input ref={user} type="text" placeholder='Username'/>
            <button className='signup_btn'>Create</button>
            <button className='back_btn'><Link className='back_link' to={'/'}>Back Home</Link></button>
        </form>
    </div>
    </>
  )
}

export default SignUp