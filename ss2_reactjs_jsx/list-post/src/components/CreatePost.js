import React from "react";
import { Field, Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listPost } from "../Data";
import ListPost from "./ListPost";

export default function () {
    const navigate = useNavigate();

    const Validation = Yup.object().shape({
        title: Yup.string().required('can not empty').min(3, "too short"),
        category: Yup.string().required('can not empty').min(3, "too short"),
        content: Yup.string().required('can not empty').min(3, "too short"),
        author: Yup.string().required('can not empty').min(3, "too short"),
        author_email: Yup.string().required('can not empty').email('email must be something@something.com')
    })
    return (
        <div>
            <Link to="/listPost">Back to list</Link>
            <h1>Create post</h1>
            <Formik
                initialValues={{
                    id: Math.floor(Math.random() * 10000),
                    title: "",
                    slug: "",
                    category: "",
                    content: "",
                    updatedAt: "",
                    author: "",
                    author_email : ""
                }}

                onSubmit={(value) => {
                    value.slug = value.title.replace(" ", "-").toLowerCase();
                    const date = new Date();
                    value.updatedAt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    listPost.push(value);
                    navigate("/listPost");
                }}

                validationSchema={Validation}

            >
                <Form>
                    <div>
                        <label htmlFor='title'>Input title</label>
                        <Field id="title" name="title" />
                        <ErrorMessage name="title" />
                    </div>
                    <div>
                        <label htmlFor='category'>Input category</label>
                        <Field id="category" name="category" />
                        <ErrorMessage name="category" />
                    </div>
                    <div>
                        <label htmlFor='content'>Input content</label>
                        <Field id="content" name="content" />
                        <ErrorMessage name="content" />
                    </div>
                    <div>
                        <label htmlFor='author'>Input author</label>
                        <Field id="author" name="author" />
                        <ErrorMessage name="author" />
                    </div>
                    <div>
                        <label htmlFor='author_email'>Input author email</label>
                        <Field id="author_email" name="author_email" />
                        <ErrorMessage name="author_email" />
                    </div>
                    <button type="submit">Add</button>
                </Form>

            </Formik>
        </div>
    )
}