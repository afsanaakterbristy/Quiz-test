import React from 'react';
import './Option.css'

const Option = ({option}) => {
    return (
        <div className='option-container'>
            <div>
                   <input className='option' type="radio" id="html" name="fav_language" value="HTML"/>
           <label className='' for="html">{option}</label>
         </div>
        </div>
    );
};

export default Option;