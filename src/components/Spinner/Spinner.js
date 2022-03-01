import React from 'react';
import spinnerImg from '../../assets/img/spinner.gif';

let Spinner = () =>{
    return (
        <>
            <div>
                <img src={spinnerImg} alt='' className='d-block m-auto' style={{width :'200px'}} />
            </div>
        </>
    )
};

export default Spinner;