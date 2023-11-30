import { useRouter } from "next/router"
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { useEffect, useState } from "react";
import { editPost, getPost } from "../../service/service";


export default function EditPost() {
    const router = useRouter();
    const { id } = useRouter().query;
    const [post, setPost] = useState(null);
    const getPostById = async (id) => {
        const res = await getPost(id);
        setPost((pre) => res);
    }
    useEffect(() => {
        getPostById(id);
    }, useRouter().query)

    const create = async (post) => {
        const category = post.category;
        post.slug = category.replace(" ", "-").toLowerCase();
        const date = new Date();
        post.updatedAt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        await editPost(post);
        backToList();
    }
    const backToList = () => {
        router.replace('/listPost')
    }
    if (post == null) {
        return null;
    }
    return (
        <>
            <h1>Edit post</h1>
            <button onClick={() => backToList()}>Back to list</button>
            <Formik
                initialValues={{
                    id: id,
                    title: post.title,
                    category: post.category,
                    slug: post.slug,
                    content: post.content,
                    author: post.author,
                    author_email: post.author_email,
                    updatedAt: "",
                }}

                onSubmit={(value) => {
                    create(value);
                    const form = document.getElementById("form");
                }}

                validationSchema={yup.object({
                    title: yup.string().required('required'),
                    category: yup.string().required('required'),
                    content: yup.string().required('required'),
                    author: yup.string().required('required'),
                    author_email: yup.string().required('required').email('this must be a email')
                })}
            >
                <Form id="form">
                    <div>
                        <label htmlFor='title'>Input title</label>
                        <Field id="title" name="title" className="input" />
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
        </>
    )
}

