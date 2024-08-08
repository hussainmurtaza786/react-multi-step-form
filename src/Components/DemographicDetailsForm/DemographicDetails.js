import React, { useState, useEffect, useContext } from 'react';
import countryData from '../../countries.json'
import style from './style.module.css'
import { useFormik } from 'formik';
import { demographicFormSchema } from '../../Schemas';
import CartContext from '../../Store/Cart-Context';
import { useDispatch, useSelector } from 'react-redux';
import { stepAction } from '../../store-redux/step-slice';
import { valueAction } from '../../store-redux/value-slice';



function DemographicDetails() {
  
  const dispatch = useDispatch()
  const { dateOfBirth, gender, mobileNo, city, address, country } = useSelector(state => state.form.demographic)


  const onSubmit = (values) => {
    dispatch(valueAction.demographicValue(values))
    dispatch(stepAction.moveToNextStep())
  }
  
  const onPrevPage = () => {
    dispatch(stepAction.moveToPreviousStep())
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      dateOfBirth: dateOfBirth,
      gender: gender,
      mobileNo: mobileNo,
      city: city,
      address: address,
      country: country,
    },

    validationSchema: demographicFormSchema,
    onSubmit,
  })

  console.log("errors ==>", errors)


  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    if (Array.isArray(countryData.countries)) {
      setCountryList(countryData.countries);
    } else {

    }
  }, []);



  return (
    <form onSubmit={handleSubmit} className={style.form} >
      <div className={style.container}>
        <div className=''>
          <input
            type="date"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dateOfBirth && touched.dateOfBirth ? style['input-error'] : ""}

          />
        </div>
        {errors.dateOfBirth && touched.dateOfBirth && <p className={style.error}>{errors.dateOfBirth} </p>}


        <label>Gender</label>
        <div className={style.gender}>
          <label htmlFor="male">Male</label>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === 'male'}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.gender && touched.gender ? style['input-error'] : ""}

          />
          <label htmlFor="female">Female</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === 'female'}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.gender && touched.gender ? style['input-error'] : ""}

          />
        </div>

        {errors.gender && touched.gender && <p className={style.error}>{errors.gender} </p>}


        <div>
          <select
            id='country'
            name="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.country && touched.country ? style['input-error'] : ""}

          >
            <option  >Select your country</option>
            {countryList.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name} ({country.dial_code})
              </option>
            ))}
          </select>
        </div>

        {errors.country && touched.country && <p className={style.error}>{errors.country} </p>}


        <div>
          <input
            placeholder="Mobile Number"
            type="tel"
            name="mobileNo"
            value={values.mobileNo}
            onChange={handleChange}
            className={errors.mobileNo && touched.mobileNo ? style['input-error'] : ""}

          />
        </div>

        {errors.mobileNo && touched.mobileNo && <p className={style.error}>{errors.mobileNo} </p>}

        <div>
          <input
            placeholder="City"
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
            className={errors.city && touched.city ? style['input-error'] : ""}

          />
        </div>

        {errors.city && touched.city && <p className={style.error}>{errors.city} </p>}

        <div>
          <input
            placeholder="Address"
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            className={errors.address && touched.address ? style['input-error'] : ""}

          />
        </div>

        {errors.address && touched.address && <p className={style.error}>{errors.address} </p>}

        <div className={style.button}>
          <button onClick={onPrevPage} type='button' className={style.btn1}> Back </button>
          <button type='submit' className={style.btn2}>Next</button>

        </div>
      </div>
    </form>
  );
}

export default DemographicDetails;
