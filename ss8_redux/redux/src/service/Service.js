import axios from "axios"

export async function GetUsers () {
    const res = await axios.get('http://localhost:8080/listUser');
    return res.data;
}

export async function DeleteUser(id){
    await axios.delete("http://localhost:8080/listUser/"+ id)
    };