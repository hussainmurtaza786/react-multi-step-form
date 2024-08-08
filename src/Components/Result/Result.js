import React, { useContext } from 'react';
import style from './Result.module.css';
import CartContext from '../../Store/Cart-Context';
import { useDispatch, useSelector } from 'react-redux';
import { stepAction } from '../../store-redux/step-slice';

function Result() {
    const { personal, demographic } = useSelector(state => state.form)
    const dispatch = useDispatch()
    const onSubmit = (values) => {
        console.log("Submitted values==>", values);
        dispatch(stepAction.moveToNextStep())
    };

    const onPrevPage = () => {
        dispatch(stepAction.moveToPreviousStep())
    };

    return (
        <form onSubmit={onSubmit} className={style.form}>
            <div className={style.result}>
                <p>User Name: <span className={style.value}>{personal.userName}</span></p>
                <p>Email: <span className={style.value}>{personal.email ? personal.email : "No Email was Added"}</span></p>
                <p>Password: <span className={style.value}>{personal.password}</span></p>
                <p>Confirm Password: <span className={style.value}>{personal.confirmPassword}</span></p>
                <p>Date of Birth: <span className={style.value}>{demographic.dateOfBirth}</span></p>
                <p>Gender: <span className={style.value}>{demographic.gender}</span></p>
                <p>Mobile Number: <span className={style.value}>{demographic.mobileNo}</span></p>
                <p>City: <span className={style.value}>{demographic.city}</span></p>
                <p>Address: <span className={style.value}>{demographic.address}</span></p>
                <p>Country: <span className={style.value}>{demographic.country}</span></p>
            </div>

            <div className={style.button}>
                <button onClick={onPrevPage} type='button' className={style.btn1}>Back</button>
                <button className={style.btn2}>Submit</button>
            </div>
        </form>
    );
}

export default Result;
