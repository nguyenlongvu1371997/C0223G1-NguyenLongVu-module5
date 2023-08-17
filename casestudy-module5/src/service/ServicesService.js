import axios from "axios";

export async function GetServiceList(){
    const res = await axios.get("http://localhost:8080/services");
    return res.data;
}

export async function DeleteService(id){
    const res = await axios.delete("http://localhost:8080/services/"+id);
}

export async function CreateService(service){
    const res = await axios.post("http://localhost:8080/services/",service);
}

export async function EditService(service){
    const res = await axios.put("http://localhost:8080/services/",+service.id, service);
}



export async function GetCustomerList(){
    const res = await axios.get("http://localhost:8080/customers");
    return res.data;
}

export async function DeleteCustomer(id){
    const res = await axios.delete("http://localhost:8080/customers/"+id);
}

export async function CreateCustomer(customer){
    const res = await axios.post("http://localhost:8080/customers/",customer);
}

export async function editCustomer(customer){
    const res = await axios.put("http://localhost:8080/customers/",+customer.id, customer);
}

export async function GetCustomerById(id) {
    const res = await axios.get('http://localhost:8080/customers/' + id);
    return res.data;
}



export async function GetContractList(){
    const res = await axios.get("http://localhost:8080/contracts");
    return res.data;
}

export async function DeleteContract(id){
    const res = await axios.delete("http://localhost:8080/contracts/"+id);
}

export async function CreateContract(contract){
    const res = await axios.post("http://localhost:8080/contracts/",contract);
}

export async function editContract(contract){
    const res = await axios.put("http://localhost:8080/contracts/",+contract.contract_id, contract);
}

export async function GetContractById(id) {
    const res = await axios.get('http://localhost:8080/contracts/'+id);
    return res.data;
}