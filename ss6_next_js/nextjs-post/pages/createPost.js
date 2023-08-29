import { Form, Formik, Field, ErrorMessage } from "formik";
import { createPost } from "./service/service";
import * as yup from 'yup';
import { useRouter } from "next/router";

export default function CreatePost() {
    const router = useRouter();
    const create = async (post) => {
        const category = post.category;
        post.slug = category.replace(" ", "-").toLowerCase();
        const date = new Date();
        post.updatedAt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        await createPost(post);
    }
    const backToList = () => {
        router.replace('/listPost')
    }
    return (
        <>
            <h1>Create post</h1>
            <button onClick={() => backToList()}>Back to list</button>
            <Formik
                initialValues={{
                    title: "",
                    category: "",
                    slug: "",
                    content: "",
                    author: "",
                    author_email: "",
                    updatedAt: "",
                }}

                onSubmit={(value) => {
                    create(value);
                    const form = document.getElementById("form");
                    form.reset();
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
                    <button type="reset">Clear</button>
                </Form>
            </Formik>
        </>
    )
}