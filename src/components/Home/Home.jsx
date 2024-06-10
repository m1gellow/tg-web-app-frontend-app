import React from 'react';
import './Home.css'
import Form from '../Form/Form';

const Home = () => {
  return (
    <div className='home'>
        <div className='logo'><span>Crypto</span> bot</div>
        <div className='categories'>
            <div className="categories_items">
                <a href="/" >sell</a>
                <a href="/" >buy</a>
            </div>
        </div>
        <Form/>
    </div>
  )
}

export default Home