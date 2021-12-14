import React from 'react';
import './ImageForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="LinkForm">
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='input'>
                <div className='pa2 br3 shadow-5'>
                    <input className='inputLink f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 ph3 pv2 dib white bg-dark-blue'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>     
            </div>    
        </div>
        );
}

export default ImageLinkForm;