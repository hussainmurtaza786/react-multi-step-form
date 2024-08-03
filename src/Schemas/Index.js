import * as yup from "yup"


// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/


export const personalFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email"),
    userName: yup.string().required("User Name is Required"),
    password: yup.string().min(8, 'Password should be alteast 8 characters')
        // .matches(passwordRules, { message: "Please create a stronger password" })
        .required(" Atleat 8 characters"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "passwords much match").required("password not match"),
})

export const demographicFormSchema = yup.object().shape({
    dateOfBirth: yup.date().required("Date of birth is required"),
    gender: yup.string().oneOf(['male', 'female'], "Please select a gender").required("Gender is required"),
    mobileNo: yup.string().min(11,'Phone number is incorrect').max(11,'Phone number is of 11 digits').required("Mobile Number is required"),
    city: yup.string().required("City is required"),
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
})
