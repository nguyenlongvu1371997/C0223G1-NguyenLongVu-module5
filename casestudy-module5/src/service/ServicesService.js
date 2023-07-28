import axios from "axios";

export async function GetServiceList(){
    const res = await axios.get("http://localhost:8080/services");
    return res.data;
}

export async function DeleteService(id){
    const res = await axios.delete("http://localhost:8080/services/"+id);
}

export async function GetCustomerList(){
    const res = await axios.get("http://localhost:8080/customers");
    return res.data;
}

export async function GetEmployeeList(){
    const res = await axios.get("http://localhost:8080/employees");
    return res.data;
}

export async function GetContractList(){
    const res = await axios.get("http://localhost:8080/contracts");
    return res.data;
}