import React from "react";
import { useState } from "react";
import { listPost } from "../Data";

export default function ListPost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState(-1);

    const [list, setList] = useState(listPost)

    const handleInputTitle = (title) => {
        setTitle(title);
    }

    const handleInputCategory = (category) => {
        setCategory(category);
    }

    const handleInputContent = (content) => {
        setContent(content);
    }


    const editPost = () => {
        if (id === -1) {
            alert("you didn't chosse post yet")
            return;
        }
        if (title === "" || category === "" || content === "") {
            alert("you have to input everything");
            return;
        }
        const date = new Date();
        const newPost = {
            "id": id,
            "title": title,
            "slug": title.replace(" ", "-").toLowerCase(),
            "category": category,
            "content": content,
            "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }
        const newList = [...list];
        let a = false;
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === id) {
                a = true;
                newList[i] = {
                    "id": id,
                    "title": title,
                    "slug": title.replace(" ", "-").toLowerCase(),
                    "category": category,
                    "content": content,
                    "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                };
                a = true;
                setId(-1);
            }
        }
        if (a) {
            setList(newList);
        } else {
            alert("can't find post");
        }
        setTitle("");
        setCategory("");
        setContent("");
    }

    const deletePost = (id) => {
        const newList = [...list];
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === id) {
                newList.splice(i, 1);
                break;
            }
        }
        setList(newList);
    }

    const getPost = (id) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                setTitle(list[i].title);
                setCategory(list[i].category);
                setContent(list[i].content);
                setId(id);
            }
        }
    }

    const createPost = () => {
        if (title === "" || category === "" || content === "") {
            alert("you have to input everything");
            return;
        }
        const date = new Date();
        const newPost = {
            "id": Math.floor(Math.random() * 10000),
            "title": title,
            "slug": title.replace(" ", "-").toLowerCase(),
            "category": category,
            "content": content,
            "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }
        setList([...list, newPost]);
        setTitle("");
        setCategory("");
        setContent("");
    }

    return (
        <div>
            <div>
                <div>
                    <label htmlFor='title'>Input title</label>
                    <input id="title" name="title" value={title} onChange={(event) => handleInputTitle(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='category'>Input category</label>
                    <input id="category" name="category" value={category} onChange={(event) => handleInputCategory(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='content'>Input content</label>
                    <input id="content" name="content" value={content} onChange={(event) => handleInputContent(event.target.value)}></input>
                </div>
                <button onClick={() => createPost()}>Add</button>
                <button onClick={() => editPost()}>Edit</button>

            </div>
            <table className="post-list" border={1}>
                <tr>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>TIME</td>
                    <td>ACTION</td>
                </tr>
                {list.map((post, index) => {
                    return (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                            <td>
                                <button className='edit-post' onClick={() => getPost(post.id)} >Edit</button>
                                <button className='delete-post' onClick={() => deletePost(post.id)}>Delete</button>
                            </td>
                        </tr>

                    )
                })}
            </table>
        </div>
    );
}
