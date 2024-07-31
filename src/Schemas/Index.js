import * as yup from "yup"


// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/


export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email"),
    userName: yup.string().required("User Name is Required"),
    password: yup.string().min(8, 'Password should be alteast 8 characters')
        // .matches(passwordRules, { message: "Please create a stronger password" })
        .required(" Atleat 8 characters"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "passwords much match").required("password not match"),
})
