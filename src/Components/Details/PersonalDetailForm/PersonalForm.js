import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import style from './PersonalForm.module.css'
import { basicSchema } from '../../../Schemas/Index'
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import CartContext from '../../../Store/Cart-Context';

function PersonalForm() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const {formValues,setFormValues,nextPage} = useContext(CartContext)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
    const onSubmit = (values) => {
        console.log("Submited values==>", values)
        setFormValues(values)
        nextPage()
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            // ...formValues,
            email: formValues.email,
            userName: formValues.userName,
            password: formValues.password,
            confirmPassword: formValues.confirmPassword,
        },

        validationSchema: basicSchema,
        onSubmit,
    })

    console.log("errors ==>", errors)



    return (
        <form onSubmit={handleSubmit} className={style.form}>

            <div className={style.uName}>
                <svg width='25px' className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
                <input
                    value={values.userName}
                    onChange={handleChange}
                    id='userName'
                    type='text'
                    placeholder='User Name'
                    onBlur={handleBlur}
                    // className={style.error}
                    className={errors.userName && touched.userName ? style['input-error'] : ""}
                ></input>
            </div>

            {errors.UserName && touched.UserName && <p className={style.error}>{errors.UserName} </p>}

            <div className={style.pass}>
                <svg width='25px' className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"></path></svg>
                <input
                    onChange={handleChange}
                    id='password'
                    onBlur={handleBlur}
                    value={values.password}
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder='Password'
                    className={errors.password && touched.password ? style['input-error'] : ""}

                />
                <div onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <IoEyeSharp />
                        : <FaRegEyeSlash />
                    }
                </div>




            </div>

            {errors.password && touched.password && <p className={style.error}>{errors.password} </p>}


            <div className={style.pass}>
                <svg width='25px' className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"></path></svg>
                <input
                    id='confirmPassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                    placeholder='Conform Password'
                    className={errors.confirmPassword && touched.confirmPassword ? style['input-error'] : ""}

                />
                <div onClick={toggleConfirmPasswordVisibility}>
                    {isConfirmPasswordVisible ? <IoEyeSharp />
                        : <FaRegEyeSlash />
                    }
                </div>
            </div>

            {errors.ConfirmPassword && touched.ConfirmPassword && <p className={style.error}>{errors.ConfirmPassword} </p>}

            <div className={style.gmail}>
                <svg width='25' className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg>
                <input
                    id='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type='email'
                    placeholder='Email(Optional)'
                    className={errors.email && touched.email ? style['input-error'] : ""}


                />
            </div>
            {errors.email && touched.email && <p className={style.error}>{errors.email} </p>}


            <div className={style.button}>
                <button type='button' className={style.btn1}> Back </button>
                <button type='submit' className={style.btn2}>Next</button>

            </div>

        </form>
    )
}

export default PersonalForm
