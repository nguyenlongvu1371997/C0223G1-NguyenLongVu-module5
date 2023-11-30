import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addMedicineToCart, getCartDetailEmployee, getCustomerByPhone, getMedicineList } from "../service/service";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Page1() {
    const [inputMedicine, setInputMedicine] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [customer, setCustomer] = useState({ name: "Khách lẻ", app_user_id: 1 })
    const [chooseMedicines, setChooseMedicines] = useState([]);
    const [listCart, setListCart] = useState([]);
    const [note, setNote] = useState("");
    const [IdCartDetail, setIdCartDetail] = useState(0);
    const app_user_id = 1;
    const navigate = useNavigate();

    useEffect(() => {
        getCart();
    }, [])

    useEffect(() => {
        findMedicine();
    }, [inputMedicine]);


    const toRetailPrescriptionInformation = () => {
        navigate("/page2")
    }

    const setQuantity = (quantity, cart) => {

    }

    const addMedicine = async (id) => {
        alert("abc")
        await addMedicineToCart(app_user_id, id, 1);
        await getCart();
    }

    

    const getCart = async () => {
        const list = await getCartDetailEmployee(app_user_id);
        setListCart((pre) => list);
    }

    const getCustomer = async () => {
        if (phoneNumber === "") {
            setCustomer({ name: "Khách lẻ", app_user_id: 1 })
        } else {
            const customer = await getCustomerByPhone(phoneNumber);
            if (customer == "") {
                setCustomer({ name: "Không tìm thấy", app_user_id: 0 })
            } else {
                setCustomer((pre) => customer);
            }


        }
    }

    const findMedicine = async () => {
        if (inputMedicine === "") {
            setChooseMedicines([]);
        } else {
            const list = await getMedicineList(inputMedicine);
            setChooseMedicines(list);
        }
    };





    return (
        <>


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <label htmlFor="id">Số phiếu</label>
                            <input id="id" name="id" value="HDL00001" readOnly className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="align-center">
                            <label htmlFor="phoneNumber">Số điện thoại</label>
                        </div>
                        <div className="align-center d-flex align-items-center">
                            <input id="phoneNumber" className="form-control" value={phoneNumber}
                                onChange={(event) => setPhoneNumber(event.target.value)} />
                            <button className="btn btn-primary" onClick={() => getCustomer()}>Tìm</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <label htmlFor="customer">Khách hàng</label>
                            <input id="customer" name="customer" value={customer.name} readOnly className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <label htmlFor="employee">Nhân viên</label>
                            <input id="employee" name="employee" value="Nguyễn Long Vũ" readOnly className="form-control" />
                            <label htmlFor="date">Ngày lập</label>
                            <input id="date" name="date" value="13/08/2023" className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <label htmlFor="note">Ghi chú</label>
                            <textarea cols="20" rows="3" id="note" name="note" className="form-control"
                                value={note} onClick={(event) => setNote(event.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingTop: '28px', textAlign: 'center' }}>
                        <a className="btn btn-outline-primary"
                            onClick={() => toRetailPrescriptionInformation()}
                        >
                            Nhập thuốc từ toa sẵn
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                </div>
                <br />
                <div className="note-frame border border-dark rounded-3">
                    <table className="table rounded-3 overflow-hidden">
                        <thead>
                            <tr style={{ backgroundColor: 'rgb(13, 110, 253)', height: '40px' }}>
                                <th>Tên thuốc</th>
                                <th>Đơn vị tính</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listCart.map((cart) => (
                                <tr key={cart.cd_id}>
                                    <td>{cart.name}</td>
                                    <td>{cart.conversion_unit}</td>
                                    <td><input type="number" value={cart.cd_quantity}
                                        onChange={(event) => setQuantity(event.target.value, cart)} /></td>
                                    <td>{cart.price}</td>
                                    <td>{cart.price * cart.cd_quantity}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>
                                    <input type="text" className="form-control" placeholder="Tìm thuốc..." id="search-input"
                                        value={inputMedicine}
                                        onChange={(event) =>{
                                            console.log(event.target.dataset.id)
                                            setInputMedicine(event.target.value)}}
                                    
                                        list="medicine-options"
                                        
                                    />
                                    <datalist id="medicine-options" >
                                        {chooseMedicines.map((medicine, index) => (
                                            <option key={medicine.id} value={medicine.name} ></option>
                                            
                                        ))}
                                    </datalist>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="row" style={{ textAlign: 'right', display: 'flex' }}>
                    <div className="col-7" style={{ textAlign: 'left' }}>
                        <b>TỔNG TIỀN: </b>
                        <b>1,000,000 Đồng</b>
                    </div>
                    <div className="col-5">
                        <button className="btn btn-primary">Lưu</button>
                        <button className="btn btn-secondary">Hủy</button>
                    </div>
                </div>
            </div>
        </>
    );
}