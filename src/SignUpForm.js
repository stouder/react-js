import React, { Component } from 'react'
import { Formik } from 'formik'

class SignUpForm extends Component {

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        repeatPassword: ''
                    }}

                    validate={values => {
                        const errors = {}
                        if (!values.username) {
                            errors.username = "le champs username doit etre rempli"
                        }
                        return errors;
                    }}

                    onSubmit={values => {
                        if (values.username === 'fabien' && values.password === 'Maxwell') {
                            alert('ok connexion')
                        } else {
                            alert('Erreur connexion')
                        }
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username
                            <input
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange} />
                                {errors.username && <span>{errors.username}</span>}
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange} />
                            <input
                                type="text"
                                name="repeatPassword"
                                value={values.repeatPassword}
                                onChange={handleChange} />
                            <button type="submit">Enter</button>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}
export default SignUpForm