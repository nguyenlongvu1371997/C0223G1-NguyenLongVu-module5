import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPosts } from "../services/Service";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function PostList() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const toAdd = () => {
        navigate("/post/create");
    }
    useEffect(() => {
        getAll();
    }, [])
    const getAll = async () => {
        const result = await getPosts();
        setList((pre) => result);
    }
    return (
        <div>
            <button onClick={() => toAdd()}>Add post</button>
            <ToastContainer />
            <h1>List post</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Category</th>
                        <th>Thumbnail URL</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.slug}</td>
                            <td>{e.category}</td>
                            <td>{e.thumbnail_url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}