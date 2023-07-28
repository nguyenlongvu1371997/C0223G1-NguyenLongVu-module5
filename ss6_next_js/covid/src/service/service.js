import axios from "axios";

 async function GetList(){
    const res = await axios.get('http://localhost:8080/covids');
    return res.data;
}
export default GetList();