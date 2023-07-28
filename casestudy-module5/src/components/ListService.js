import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useState,useEffect } from "react";
import { GetServiceList } from "../service/ServicesService";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { DeleteService } from "../service/ServicesService";


const ServiceList = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [listService, setListService]= useState([]);

  const getListService = async () => {
    const list = await GetServiceList();
    setListService(list);
  }

  useEffect(() => {
    getListService();
  }, []);

  const handleDelete = () => {
    DeleteService(`${selectedServiceId}`);
    setShowDeleteModal(false);
    getListService();
  };

  const handleShowDeleteModal = (serviceId) => {
    setSelectedServiceId(serviceId);
    setShowDeleteModal(true);
  };

  return (
    <>
    <Header />
    <Navigation />
    <div className="container">
      
      <div className="row">
        {listService.map((service) => {
          return (
            <div className="col-md-4" key={service.id}>
              <Card className="mb-4 box-shadow">
                <Card.Img variant="top" src={"https://www.kampoengvilla.com/wp-content/uploads/2019/01/kampoeng-villa-two-bedroom-villa-1.jpg"} />
                <Card.Body>
                  <Card.Title>{service.service}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Card.Text className="font-weight-bold">{service.costs}</Card.Text>
                  <Button variant="outline-secondary" href={`edit-service.html?id=${service.id}`}>
                    Edit
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    onClick={() => handleShowDeleteModal(service.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delele service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you sure to delese this service?
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
    </div>
    <Footer />
    </>
  );
};

export default ServiceList;