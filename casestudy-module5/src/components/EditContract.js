import React from "react";
import '../css/AddContract.css';
import Header from "./Header";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import { editContract,GetContractById } from "../service/ServicesService";
import { useNavigate, useParams } from "react-router-dom";

const EditContract = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [form, setForm] = useState({});
    const [contract, setContract] = useState({});

    const getContract = async () => {
       
        const data = await GetContractById(params.id);
        setContract(data);
        console.log(data)
    }
    useEffect(() => {
        
        getContract();
        console.log(contract)
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
                            <h1>Edit Contract</h1>
                            {contract.contract_id &&
                            <Formik
                                initialValues={{
                                    contract_id: contract.contract_id,
                                    customer: {
                                        name: contract.customer.name,
                                    },
                                    service: {
                                        service: contract.service.service,
                                    },
                                    check_in: contract.check_in,
                                    check_out: contract.check_out,
                                    prepaidAmount: contract.prepaidAmount,
                                    totalPayment: contract.totalPayment,
                                }}

                                validationSchema={yup.object({
                                    prepaidAmount: yup
                                        .number()
                                        .min(0, "Minimum 0")
                                        .required("prepaidAmount must be Required"),
                                })}

                                onSubmit={(values) => {

                                    editContract(values).then(() => {
                                        navigate('/contract/list');
                                    })
                                }}

                            >
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label htmlFor="contract_id">Id</label>
                                                <Field type="text" className="form-control" id="contract_id" name="contract_id" />
                                                <ErrorMessage name="contract_id" component="div" className="error" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label htmlFor="prepaidAmount">totalPayment</label>
                                                <Field type="number" className="form-control" id="prepaidAmount" name="prepaidAmount" />
                                                <ErrorMessage name="prepaidAmount" component="div" className="error" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label htmlFor="totalPayment">totalPayment</label>
                                                <Field type="number" className="form-control" id="totalPayment" name="totalPayment" />
                                                <ErrorMessage name="totalPayment" component="div" className="error" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label htmlFor="check_in">Check_in</label>
                                                <Field type="date" className="form-control" id="check_in" name="check_in" />
                                                <ErrorMessage name="check_in" component="div" className="error" />
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label htmlFor="check_out">Check_out</label>
                                                <Field type="date" className="form-control" id="check_out" name="check_out" />
                                                <ErrorMessage name="check_out" component="div" className="error" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="customer.name">Customer Name</label>
                                            <Field type="text" className="form-control" id="customer.name" name="customer.name" />
                                            <ErrorMessage name="customer.name" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="service.name">Service Name</label>
                                            <Field type="text" className="form-control" id="service.service" name="service.service" />
                                            <ErrorMessage name="service.service" component="div" className="error" />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Send</button>
                                </Form>
                            </Formik>
}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditContract;