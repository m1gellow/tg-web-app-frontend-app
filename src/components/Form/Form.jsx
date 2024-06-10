import React from 'react';
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
            <input type="text" className='input' placeholder='Pay'/>
            <input type="text" className='input' placeholder='Get'/>
            <button className='button'>Send</button>
    </div>
  )
}

export default Form