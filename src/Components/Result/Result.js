import React, { useContext } from 'react';
import style from './Result.module.css';
import CartContext from '../../Store/Cart-Context';

function Result() {
    const { formValues, setFormValues, nextPage, prevPage } = useContext(CartContext);

    const onSubmit = (values) => {
        console.log("Submitted values==>", values);
        setFormValues(values);
        nextPage();
    };

    const onPrevPage = () => {
        prevPage();
    };

    return (
        <form onSubmit={onSubmit} className={style.form}>
            <div className={style.result}>
                <p>User Name: <span className={style.value}>{formValues.userName}</span></p>
                <p>Email: <span className={style.value}>{formValues.email ? formValues.email : "No Email was Added"}</span></p>
                <p>Password: <span className={style.value}>{formValues.password}</span></p>
                <p>Confirm Password: <span className={style.value}>{formValues.confirmPassword}</span></p>
                <p>Date of Birth: <span className={style.value}>{formValues.dateOfBirth}</span></p>
                <p>Gender: <span className={style.value}>{formValues.gender}</span></p>
                <p>Mobile Number: <span className={style.value}>{formValues.mobileNo}</span></p>
                <p>City: <span className={style.value}>{formValues.city}</span></p>
                <p>Address: <span className={style.value}>{formValues.address}</span></p>
                <p>Country: <span className={style.value}>{formValues.country}</span></p>
            </div>

            <div className={style.button}>
                <button onClick={onPrevPage} type='button' className={style.btn1}>Back</button>
                <button className={style.btn2}>Submit</button>
            </div>
        </form>
    );
}

export default Result;
