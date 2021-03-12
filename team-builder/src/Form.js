import React from 'react'
import styled from 'styled-components'
import Card from './style/Card'
import './App.css';


export default function Form(props) {

    return (
            <form className='form container' onSubmit={''}>
                <div>
                    <label> Name:
                        <input 
                            type='text' 
                            value={''} 
                            placeholder='Name' 
                            name='name' 
                            maxLength='15' 
                            onChange={''} 
                        />

                    </label>
                    <label> Email:
                        <input 
                            type='email' 
                            value={''} 
                            placeholder='Email' 
                            name='email' 
                            maxLength='15' 
                            onChange={''} 
                        />  
                    </label>
                    <label>Role:
                        <select onChange={''} values={''}>
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

