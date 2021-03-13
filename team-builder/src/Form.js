import React from 'react'
import './App.css';




export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
      }

    const onSubmit = evt => {
    evt.preventDefault();
    submit()
  }


    return (
            <form className='form container' onSubmit={onSubmit}>
                <div>
                    <label> Name:
                        <input 
                            type='text' 
                            value={values.name} 
                            placeholder='Name' 
                            name='name' 
                            maxLength='15' 
                            onChange={onChange} 
                        />

                    </label>
                    <label> Email:
                        <input 
                            type='email' 
                            value={values.email} 
                            placeholder='Email' 
                            name='email' 
                            onChange={onChange} 
                        />  
                    </label>
                    <label>Role:
                        <select name='role' onChange={onChange} value={values.role}>
                            <option>Click to Select</option>
                            <option>Light</option>
                            <option>Darkness</option>
                        </select>
                    </label>
                    <div className='submit'>
                        <button>Add to Team</button>
                    </div>
                </div>
            </form>
    )
}

