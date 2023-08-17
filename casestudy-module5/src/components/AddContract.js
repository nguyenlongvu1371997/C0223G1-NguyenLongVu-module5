import React from "react";
import '../css/AddContract.css';
import Header from "./Header";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { CreateContract } from "../service/ServicesService";
import { useNavigate } from "react-router-dom";

const AddContract = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const value = event.target.type === "checkbox" ? !form[event.target.name] : event.target.value;
        setForm((prevForm) => ({ ...prevForm, [event.target.name]: value }));
    };


    return (
        <>
            <Header />
            <div class="container-lg">
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <div class="contact-form">
                            <h1>Create Contract</h1>
                            
                            <Formik
                                initialValues={{
                                    contract_id: "",
                                    customer: {
                                        name: "",
                                    },
                                    service: {
                                        name: "",
                                    },
                                    check_in: "",
                                    check_out: "",
                                    deposit: "",
                                    total: "",
                                }}

                                validationSchema={yup.object({
                                    deposit: yup
                                        .number()
                                        .min(0, "Minimum 0")
                                        .required("Deposit must be Required"),
                                })}

                                onSubmit={(values) => {

                                    CreateContract(values).then(() => {
                                        navigate('/contract/list');
                                    })
                                }}

                            >
                                <Form>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label htmlFor="contract_id">Id</label>
                                                <Field type="text" class="form-control" id="contract_id" name="contract_id" />
                                                <ErrorMessage name="contract_id" component="div" className="error" />
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label htmlFor="deposit">Total</label>
                                                <Field type="number" class="form-control" id="deposit" name="deposit" />
                                                <ErrorMessage name="deposit" component="div" className="error" />
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label htmlFor="total">Total</label>
                                                <Field type="number" class="form-control" id="total" name="total" />
                                                <ErrorMessage name="total" component="div" className="error" />
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label htmlFor="check_in">Check_in</label>
                                                <Field type="date" class="form-control" id="check_in" name="check_in" />
                                                <ErrorMessage name="check_in" component="div" className="error" />
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label htmlFor="check_out">Check_out</label>
                                                <Field type="date" class="form-control" id="check_out" name="check_out" />
                                                <ErrorMessage name="check_out" component="div" className="error" />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label htmlFor="customer.name">Customer Name</label>
                                            <Field type="text" class="form-control" id="customer.name" name="customer.name" />
                                            <ErrorMessage name="customer.name" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label htmlFor="service.name">Service Name</label>
                                            <Field type="text" class="form-control" id="service.name" name="service.name" />
                                            <ErrorMessage name="service.name" component="div" className="error" />
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Send</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContract;