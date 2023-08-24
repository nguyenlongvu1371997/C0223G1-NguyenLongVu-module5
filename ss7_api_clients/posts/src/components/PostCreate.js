import { ErrorMessage, Formik, Form, Field } from "formik"
import axios from "axios"
import { creatPost } from "../services/Service"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";


export default function CreatePost() {
    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const navigate = useNavigate();
    const add = async (post) => {
        const result = await creatPost(post);
        if (result === 0) {
            notify();
        }
    }
    const toList = () => {
        navigate("/post");
    }
    return (
        <div>
            <button onClick={() => toList()}>Back to list</button>
            <button onClick={() => notify()}>Toast</button>
            <ToastContainer />
            <h1>CREATE POST</h1>
            <Formik
                initialValues={{
                    title: "",
                    thumbnail_url: "",
                    slug: "",
                    category: ""
                }}
                validationSchema={yup.object.shape({
                    title: yup.string().required('can not empty'),
                    slug: yup.string().required('can not empty'),
                    category: yup.string().required('can not empty'),
                    thumbnail_url: yup.string().required('can not empty'),
                })}
                onSubmit={async (value) => {
                    await add(value);
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="title">Field title</label>
                        <Field id="title" name="title"></Field>
                        <ErrorMessage name="title" />
                    </div>
                    <div>
                        <label htmlFor="slug">Field slug</label>
                        <Field id="slug" name="slug"></Field>
                        <ErrorMessage name="slug" />
                    </div>
                    <div>
                        <label htmlFor="category">Field category</label>
                        <Field id="category" name="category"></Field>
                        <ErrorMessage name="category" />
                    </div>
                    <div>
                        <label htmlFor="thumbnail_url">Field thumbnail_url</label>
                        <Field id="thumbnail_url" name="thumbnail_url"></Field>
                        <ErrorMessage name="thumbnail_url" />
                    </div>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    )
}