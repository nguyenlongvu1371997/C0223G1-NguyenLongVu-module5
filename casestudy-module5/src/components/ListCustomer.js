import Header from "./Header.js"
import Footer from "./Footer.js"
import Navigation from "./Navigation.js"
import { useState, useEffect } from "react";
import { GetCustomerList, DeleteCustomer } from "../service/ServicesService.js";
import React from "react";
import '../css/ListCustomer.css';
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";



export default function CustomerList() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [listCustomer, setListCustomer] = useState([]);
    const [selectCustomerId, setSelectCustomerId] = useState(null);

    const getListCustomer = async () => {
        const list = await GetCustomerList();
        setListCustomer(list);
    }

    useEffect(() => {
        getListCustomer();
    }, []);

    const handleDelete = async () => {
        await DeleteCustomer(`${selectCustomerId}`);
        setShowDeleteModal(false);
        await getListCustomer();
    };

    const handleShowDeleteModal = (customerId) => {
        setSelectCustomerId(customerId);
        setShowDeleteModal(true);
    };



    return (
        <>
            <Header />
            <Navigation />

            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2><b>LIST CUSTOMER</b> </h2></div>
                                <div className="col-sm-4">
                                    <Link to="../customer/create" className="btn btn-info add-new">
                                        <i className="fa fa-plus"></i> Add new
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Name</td>
                                    <td>Date of birth</td>
                                    <td>Id card</td>
                                    <td>Phone number</td>
                                    <td>Action </td>
                                </tr>
                            </thead>
                            <tbody>



                                {listCustomer.map((customer, index) => {
                                    return (
                                        <tr key={customer.id}>
                                            <td>{index + 1}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.date_of_birth}</td>
                                            <td>{customer.id_card}</td>
                                            <td>{customer.phone_number}</td>
                                            <td>
                                                
                                                <Link to={`../customer/edit/${customer.id}`}><button href="#" className="edit" title="Edit" data-toggle="tooltip">Edit</button></Link>
                                                <button onClick={() => handleShowDeleteModal(customer.id)} className="delete" title="Delete" data-toggle="tooltip">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Delele customer</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Do you sure to delese this customer?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                                            Cancel
                                        </Button>
                                        <Button variant="danger" onClick={handleDelete}>
                                            Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

