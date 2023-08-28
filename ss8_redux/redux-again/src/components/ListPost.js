import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFetch } from "../actions";

export default function PostList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.myReducer.posts);
    useEffect(()=>{
        dispatch(getPostsFetch());
    },[])
    
    const toAdd = () => {
        navigate('/create')
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
                    {posts.map((e) => (
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