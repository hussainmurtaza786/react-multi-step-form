import React from 'react'
import style from '../DemographicDetailsForm/style.module.css'
function DemographicDetails() {
  return (
    <form className={style.form}>
      <div>

        <input type='date' />
      </div>

      <label>Gender</label>

      <div>

        <label htmlFor='male'>Male</label>
        <input id='male' type='radio' name='gender' value='male' />

        <label htmlFor='female'>Female</label>
        <input id='female' type='radio' name='gender' value='female' />
      </div>
      <div>
        {/* <input type=/> */}
      </div>



    </form>
  )
}

export default DemographicDetails
