import React from "react";
import '../css/AddCustomer.css';
import Header from "./Header";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import { GetCustomerById, editCustomer } from "../service/ServicesService";
import { useNavigate, useParams } from "react-router-dom";



const EditCustomer = () => {
    const navigate = useNavigate();
    const params = useParams();
    const SEX_LIST = [{ label: "Male", value: "male" },
    { label: "Female", value: "female" }];
    const [form, setForm] = useState({});
    const [customer, setCustomer] = useState({});

    const getCustomer = async () => {
        const data = await GetCustomerById(params.id);
        
        setCustomer(data);

    }

    useEffect(() => {
        getCustomer();
       
    }, []);


    const handleChange = (event) => {
        const value = event.target.type === "checkbox" ? !form[event.target.name] : event.target.value;
        setForm((prevForm) => ({ ...prevForm, [event.target.name]: value }));
    };

    return (
        <>
            <Header />
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Edit Customer</h1>
                            {customer.id &&
                                <Formik
                                    initialValues={{
                                        id: customer.id,
                                        name: customer.name,
                                        date_of_birth: customer.date_of_birth,
                                        gender: customer.gender,
                                        id_card: customer.id_card,
                                        phone_number: customer.phone_number,
                                        email: customer.email,
                                        customer_type: JSON.stringify(customer.customer_type),
                                        address: customer.address,
                                    }}

                                    validationSchema={yup.object({
                                        name: yup.string().trim().min(3, 'Name must be at least 3 characters').max(50, 'Name cannot be longer than 50 characters').required("Please enter your name !"),
                                        gender: yup.string().required('Please choose your gender!'),
                                        date_of_birth: yup.string().required('Please enter your date of birth!'),
                                        email: yup.string().email('Your email is invalid').required('Please enter your email!'),
                                        id_card: yup.string().matches(/^[0-9]{9,12}$/, 'ID card is invalid').required('Please enter your ID card!'),
                                        address: yup.string().required('Please enter your address!'),
                                        phone_number: yup.string().length(10, 'Phone number is invalid').required('Please enter your phone number!'),
                                        customer_type: yup.string().required('Please choose customer type!')
                                    })}

                                    onSubmit={(values) => {
                                        const customer = {
                                            ...values,
                                            customer_type: values.customer_type.toUpperCase(),
                                            gender: values.gender.toUpperCase(),
                                        };
                                        editCustomer(customer).then(() => {
                                            navigate('/customer/list');
                                        })
                                    }}

                                >
                                    <Form>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <Field type="text" className="form-control" id="name" name="name" />
                                                    <ErrorMessage name="name" component="div" className="error" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="date_of_birth">Date of birth</label>
                                                    <Field type="date" className="form-control" id="date_of_birth" name="date_of_birth" />
                                                    <ErrorMessage name="date_of_birth" component="div" className="error" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <label htmlFor="gender">Gender </label><br />
                                                <label >
                                                    {SEX_LIST.map((sex) => (
                                                        <label key={sex.value}>
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                value={sex.value}
                                                                checked={form.gender == sex.value}
                                                                onChange={handleChange}
                                                            />
                                                            {sex.label}
                                                        </label>
                                                    ))}
                                                </label>

                                                <ErrorMessage name="gender" component="div" className="error" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="id_card">Id card</label>
                                                    <Field type="text" className="form-control" id="id_card" name="id_card" />
                                                    <ErrorMessage name="id_card" component="div" className="error" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="phone_number">Phone number</label>
                                                    <Field type="text" className="form-control" id="phone_number" name="phone_number" />
                                                    <ErrorMessage name="phone_number" component="div" className="error" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <Field type="email" className="form-control" id="email" name="email" />
                                                    <ErrorMessage name="email" component="div" className="error" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="address">Address</label>
                                                    <Field type="text" className="form-control" id="address" name="address" />
                                                    <ErrorMessage name="address" component="div" className="error" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <label htmlFor="customer_type">Loại khách hàng:</label>
                                                <Field className="form-control" as="select" name="customer_type" id="customer_type">
                                                    <option value="">-- Select customer type --</option>
                                                    <option value="DIAMOND">Diamond</option>
                                                    <option value="PLATINUM">Platinum</option>
                                                    <option value="GOLD">Gold</option>
                                                    <option value="SILVER">Silver</option>
                                                    <option value="MEMBER">Member</option>
                                                </Field>
                                                <ErrorMessage name="customer_type" component="div" className="error" />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </Form>
                                </Formik>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default EditCustomer;