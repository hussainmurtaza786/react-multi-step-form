import React, { useState } from 'react';
import CartContext from './Cart-Context';

const CartProvider = (props) => {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",

    })

   
    const moveToNextStep = () => {
        const nextStep = step + 1;
        if (nextStep > 3) {
            setStep(3);
        } else {
            setStep(nextStep);
        }
    };

    const moveToPreviousStep = () => {
        const prevStep = step - 1;
        if (prevStep < 1) {
            setStep(1);
        } else {
            setStep(prevStep);
        }
    };

    const _setFormValues = (newValues) => {
        setFormValues(prev => {
            return { ...prev, ...newValues }
        })
    }

    const Context = {
        step,
        nextPage: moveToNextStep,
        prevPage: moveToPreviousStep,
        setFormValues: _setFormValues,
        formValues,
        // formValues:{
        //     email: "",
        //     userName: "",
        //     password: "",
        //     confirmPassword: "",
        // }
    }


    return (
        <CartContext.Provider value={Context}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
