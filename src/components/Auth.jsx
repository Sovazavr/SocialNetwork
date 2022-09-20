import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import signinImage from '../assets/signup.jpg'

const initialState={
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '', 
    avatarURL: '',
}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)
    const [form, setForm]=useState(initialState)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='fullName'>Full Name</label>
                                <input
                                    name='fullName'
                                    type='text'
                                    placeholder='Полное Имя'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='username'>Username</label>
                            <input
                                name='username'
                                type='text'
                                placeholder='Имя Пользователя'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input
                                    name='phoneNumber'
                                    type='text'
                                    placeholder='Номер телефона'
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                        )}
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='avatarURL'>Avatar URL</label>
                                <input
                                    name='avatarURL'
                                    type='text'
                                    placeholder='Ссылка на аватарку'
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Пароль'
                                onChange={handleChange}
                                required
                            />

                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='confirmPassword'>Confirm password</label>
                                <input
                                    name='confirmPassword'
                                    type='password'
                                    placeholder='Подтвердите пароль'
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                        )}
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className='auth__form-container_fields-account'>
                        <p>
                            {isSignup
                                ? 'Если учетная запись уже существует: '
                                : 'Создайте учетную запись, если у вас её нет: '}
                            <span onClick={switchMode}>
                                {isSignup ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>

                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={signinImage} alt="sign in"/>
            </div>
        </div>
    )
}

export default Auth