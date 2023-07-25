
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { EditBook } from "../service/BookService";



export default function Edit() {
    const navigate = useNavigate();
    const bk = useParams(id);
    return (
        <>
            <Formik
                initialValues={{ id: bk, title: '', quantity: '' }}
                validationSchema={yup.object({
                    title: yup.string().required("title is required"),
                    quantity: yup.number().required("quantity is required").min(1, "quantity is more than 0")
                })}
                onSubmit={(values) => {
                    EditBook(values).then(() => {
                        navigate('/');
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
                    <button type="submit">Edit</button>
                </Form>
            </Formik>

        </>
    )
}