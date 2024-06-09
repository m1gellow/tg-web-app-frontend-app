import React, { useCallback, useEffect, useState } from 'react';
import './Form.css'
import { useTelegram } from '../hooks/useTelegram';

const Form = () => {
  const [data, setData] = useState({
    country: '',
    street: '',
    subject: ''
  });
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const dataToSend = {
      country: data.country,
      street: data.street,
      subject: data.subject
    };

    tg.sendData(JSON.stringify(dataToSend));
  }, [data]);

  useEffect(() => {
    if (!tg) return; // ensure tg is initialized

    tg.onEvent('mainButtonClicked', onSendData);

    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData, tg]);

  useEffect(() => {
    if (!tg) return; // ensure tg is initialized

    tg.MainButton.setParams({
      text: 'Send Data'
    });
  }, [tg]);

  useEffect(() => {
    if (!tg) return; // ensure tg is initialized

    if (!data.street ||!data.country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [tg, data.country, data.street]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({...prevData, [name]: value }));

    console.log(data);
  };

  return (
    <div className={'form'}>
      <h3>Type your data</h3>
      <input type="text" name='country' onChange={onChange} className='input' placeholder='Country'/>
      <input type="text" name='street' onChange={onChange} className='input' placeholder='Street' />
      <select className='select' name='subject' onChange={onChange}>
        <option value={'legal'}>Юр.лицо</option>
        <option value={'physical'}>Физ.лицо</option>
      </select>
    </div>
  );
};

export default Form