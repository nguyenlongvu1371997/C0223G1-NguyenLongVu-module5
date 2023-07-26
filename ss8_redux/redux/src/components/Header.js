import { useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {getListUser} from "../redux/Action"
export default function Header(){
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handelButtonGetUsers = ()=>{
        dispatch(getListUser())
navigate("/list");
    }
    return(
        <>
        <h1>User list</h1>
        <button onClick={handelButtonGetUsers}>Get users</button>
        </>
    )
}

