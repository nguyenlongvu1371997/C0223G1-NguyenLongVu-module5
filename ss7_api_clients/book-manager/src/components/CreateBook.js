import { GetBookList } from "../service/BookService";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { AddBook } from "../service/BookService";


export default function CreateBook() {
    const navigate = useNavigate();
    
    return (
        <>
            <Formik
                initialValues={{ id: '', title: '', quantity: '' }}
                validationSchema={yup.object({
                    title: yup.string().required("title is required"),
                    quantity: yup.number().required("quantity is required").min(1,"quantity is more than 0")
                })}
                onSubmit={(values) => {
                    AddBook(values).then(() => {
                        navigate('/books');
                    })
                }}>
                <Form>
                    <div>
                        <label htmlFor="title">
                            Title:
                        </label>
                        <Field id='title' type='text' name='title' />
                        <ErrorMessage name="title" component='div' className="red-text" />
                    </div>
                    <div>
                        <label htmlFor="quantity">
                            Quantity:
                        </label>
                        <Field id='quantity' type='number' name='quantity' />
                        <ErrorMessage name="quantity" component='div' className="red-text" />
                    </div>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </>
    )
}