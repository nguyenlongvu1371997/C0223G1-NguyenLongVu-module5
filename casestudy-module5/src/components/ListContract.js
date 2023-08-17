import Header from "./Header.js"
import Footer from "./Footer.js"
import Navigation from "./Navigation.js"
import { useState, useEffect } from "react";
import { GetContractList, DeleteContract } from "../service/ServicesService.js";
import React from "react";
import '../css/ListContract.css';
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";



export default function ContractList() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [listContract, setListContract] = useState([]);
    const [selectContractId, setSelectContractId] = useState(null);

    const getListContract = async () => {
        const list = await GetContractList();
        setListContract(list);
    }

    useEffect(() => {
        getListContract();
    }, []);

    const handleDelete = async () => {
        await DeleteContract(`${selectContractId}`);
        setShowDeleteModal(false);
        await getListContract();
    };

    const handleShowDeleteModal = (id) => {
        setSelectContractId(id);
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
                                <div className="col-sm-8"><h2><b>LIST Contract</b> </h2></div>
                                <div className="col-sm-4">
                                    <Link to="../contract/create" className="btn btn-info add-new">
                                        <i className="fa fa-plus"></i> Add new
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Service</th>
                                    <th>Day Start</th>
                                    <th>Day End</th>
                                    <th>Pre-order amount</th>
                                    <th>Total payment amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>



                                {listContract.map((c, index) => {
                                    return (
                                        <tr key={c.id}>
                                            <td>{c.contract_id}</td>
                                            <td>{c.customer.name}</td>
                                            <td>{c.service.service}</td>
                                            <td>{c.startDate}</td>
                                            <td>{c.endDate}</td>
                                            <td>{c.prepaidAmount}</td>
                                            <td>{c.totalPayment}</td>
                                            <td>

                                                <Link to={`../contract/edit/${c.id}`}><button href="#" className="edit" title="Edit" data-toggle="tooltip">Edit</button></Link>
                                                <button onClick={() => handleShowDeleteModal(c.id)} className="delete" title="Delete" data-toggle="tooltip">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Delele contract</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Do you sure to delese this contract?
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

