import React, { Component } from 'react';
import {Formik,Field} from 'formik';

class TestFormik extends Component{
    render(){
        return(
            <div>
            <Formik
                initialValues={{
                    date:new Date().toISOString().split('T').shift(),
                    note:''
            }}>
                {({handleSubmit})=>(
                    
                <form onSubmit={handleSubmit}>
                    <Field type="date" name="date"/>
                </form>
                )}
            </Formik>
            </div>
            )}   
                }
export default TestFormik
