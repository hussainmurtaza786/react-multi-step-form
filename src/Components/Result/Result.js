import React, { useContext } from 'react'

import style from './Result.module.css'
import CartContext from '../../Store/Cart-Context'

function Result() {

    const { formValues, setFormValues, nextPage, prevPage } = useContext(CartContext)

    const onSubmit = (values) => {
        console.log("Submited values==>", values)
        setFormValues(values)
        nextPage()
    }
    const onPrevPage = () => {
        prevPage()
    }



    return (
        <form onSubmit={onSubmit} className={style.result}>

            <div>
                <p>User Name: {formValues.userName}</p>
                <p>Email: {formValues.email ? formValues.email : "No Email was Added"}</p>
                <p>Password: {formValues.password}</p>
                <p>Confirm Password: {formValues.confirmPassword}</p>
                <p>Date of Birth: {formValues.dateOfBirth}</p>
                <p>Gender : {formValues.gender}</p>
                <p>Mobile Number : {formValues.mobileNo}</p>
                <p>City : {formValues.city}</p>
                <p>Address : {formValues.address}</p>
                <p>Country : {formValues.country}</p>


            </div>

            <div className={style.button}>
                <button onClick={onPrevPage} type='button' className={style.btn1}> Back </button>
                <button className={style.btn2}>Submit</button>
            </div>

        </form>
    )
}

export default Result
