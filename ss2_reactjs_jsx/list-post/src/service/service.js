import axios from "axios";

export async function getMedicineList(name) {
    const medicines = await axios.get("http://localhost:8080/api/carts/getMedicine?name=" + name);
    return medicines.data;
}

export async function getCustomerByPhone(phone) {
    const customer = await axios.get("http://localhost:8080/api/carts/getInforCustomer?phone=" + phone);
    return customer.data;
}

export async function getCartDetailEmployee(id) {
    const carts = await axios.get("http://localhost:8080/api/carts/getAllCartDetailsByUser?id=" + id)
    return carts.data;
}

export async function addMedicineToCart(userId, medicineId, quantity) {
    await axios.post("http://localhost:8080/api/carts/add-from-home-details?appUserId=" 
    + userId + "?medicineId=" + medicineId + "?newQuantity=" + quantity);
}