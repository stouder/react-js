import React,{Component} from 'react'
import {Formik} from 'formik'

class ExpenseForm extends Component{

    onSubmit = values => {
        alert(values)
        this.props.onSubmit(values)
      }

    render(){
        return(
            <div>
            <Formik
                initialValues = {{
                    title : '',
                    date : new Date().toISOString().split('T').shift(),
                    notes : ''
                }}
                
                validate={values=>{
                    const errors = {}
                    if(!values.title){
                        errors.title="le champs title doit etre rempli"
                    }
                    return errors;
                }
                }

                onSubmit={this.onSubmit}
                >
            {({values,handleChange,handleSubmit,errors}) => (
            <form onSubmit={handleSubmit}>
                <label>
                    Title 
                <input 
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}/>
                    {errors.title && <span>{errors.title}</span>}
                </label>
                <input 
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}/>
                <input 
                    type="text"
                    name="notes"
                    value={values.notes}
                    onChange={handleChange}/>
                <button type="submit">Enter</button>
            </form>
                    )}
            </Formik>
            </div>
        )}
}
export default ExpenseForm