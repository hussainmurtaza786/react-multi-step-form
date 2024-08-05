import React, { useContext, useState } from 'react';
import styles from './PersonalDetails.module.css';
import PersonalForm from './PersonalForm';
import style from './PersonalForm.module.css'
import CartContext from '../../../Store/Cart-Context';
import DemographicDetails from '../../DemographicDetailsForm/DemographicDetails';
import Result from '../../Result/Result';


function PersonalDetails() {



    const ctx = useContext(CartContext)

    return (
        <div>
            <h1 className={styles.heading}>Multi-Step Form Demo</h1>

            <div className={styles.detailsFilling}>
                <div className={styles.step}>
                    <div className={styles.box}>
                        <div className={ctx.step === 1 ? styles.circle1 : styles.circle}>
                            {ctx.step > 1 ? <p>&#10003; </p> : '1'}

                        </div>

                    </div>
                    <span className={styles.name}>Personal details</span>
                </div>
                <div className={styles.connector}></div>


                <div className={styles.step}>
                    <div className={styles.box}>
                        <div className={ctx.step === 2 ? styles.circle1 : styles.circle}>
                            {ctx.step > 2 ? <p>&#10003; </p> : '2'}

                        </div>
                    </div>
                    <span className={styles.name}>Demographic details</span>
                </div>

                <div className={styles.connector}></div>

                <div className={styles.step}>
                    <div className={styles.box}>
                        <div className={ctx.step === 3 ? styles.circle1 : styles.circle}>
                        {ctx.step > 3 ? <p>&#10003; </p> : '3'}
                            
                            </div>
                    </div>
                    <span className={styles.name}>Review details</span>
                </div>
            </div>


            {ctx.step === 1 && <PersonalForm />}
            {ctx.step === 2 && <DemographicDetails />}
            {ctx.step === 3 && <Result />}

        </div>
    );
}

export default PersonalDetails;


function Form1() {
    return (
        <div>Form 1</div>
    )
}

function Form2() {
    return (
        <div>Form 2</div>
    )
}

function Form3() {
    return (
        <div>Form 3</div>
    )
}