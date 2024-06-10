import React, { useEffect, useState } from 'react';
import './Form.css'

const tg = window.Telegram.WebApp;


const Form = () => {
    const [count, setCount] = useState({
      pay: '',
      get: ''
    })


  useEffect(() => {
    if(!count.pay || !count.get){
      tg.MainButton.hide();
      console.log("hide")
    }else{
      tg.MainButton.show()
      console.log("show")
    }
  }, [count.pay, count.get])


    const handleChange = (e) => {
      const {name, value} = e.target;

      setCount({
        ...count,
        [name]: value
      })
    }

    console.log(count)



  return (
    <div className='form'>
            <input type="text" className='input' placeholder='Pay' name='pay' value={count.pay} onChange={(e) => handleChange(e)}/>
            <input type="text" className='input' placeholder='Get' name='get' value={count.get} onChange={(e) => handleChange(e)}/>

    </div>
  )
}

export default Form