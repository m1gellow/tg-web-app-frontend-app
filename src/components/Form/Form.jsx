import React, { useEffect, useState } from 'react';
import './Form.css'
import { useTelegram } from '../hooks/useTelegram';

const Form = () => {
  const [data, setData] = useState({
    country: '',
    street: '',
    subject: ''
  })
  const {tg} = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send Data'
    })
  }, [tg])

  useEffect(() => {
        if(!street || !country){
          tg.MainButton.hide()
        }else{
          tg.MainButton.show()
        }
  }, [tg, data.country, data.street])



  const onChange = (e) => {
    const {name, value} = e.target;
    
    setData({
      ...data,
      [name]: value
    })

    console.log(data)
  }


  return (
    <div className={'form'}>
        <h3>Type your data</h3>
        <input type="text" name='country' onChange={(e) => onChange(e)}  className='input' placeholder='Country'/>
        <input type="text" name='street' onChange={(e) => onChange(e)} className='input' placeholder='Street' />
        <select className='select' name='subject' onChange={(e) => onChange(e)}>
          <option value={'legal'}>Юр.лицо</option>
          <option value={'physical'}>Физ.лицо</option>
        </select>
    </div>
  )
}

export default Form