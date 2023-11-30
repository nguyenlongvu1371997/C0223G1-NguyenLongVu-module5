import { useEffect, useState } from "react"
import { deletePost, getList } from "../service/service";
import { useRouter } from "next/router";
import ReactModal from "react-modal";

export default function ListPost() {
    const navigate = useRouter();
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [post, setPost] = useState({});
    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        const list = await getList();
        setPosts((pre) => list);
    }
    const toCreate = () => {
        navigate.replace('/createPost');
    }
    const toEdit = (id) => {
        navigate.replace('/editPost/' + id);
    }

    const openModal = (post) => {
        setModal((pre) => true);
        setPost((pre) => post);
    }

    const deletePostt = async () => {
        await deletePost(post.id);
        setModal((pre) => false);
        getAll();
    }

    return (
        <>
            <h1>LIST POST</h1>
            <button onClick={() => toCreate()}>Create post</button>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>CATEGORY</td>
                        <td>TIME</td>
                        <td>ACTION</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((p) => {
                        return (
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.category}</td>
                                <td>{p.updatedAt}</td>
                                <td>
                                    <button onClick={() => openModal(p)}>Delete</button>
                                    <button onClick={() => toEdit(p.id)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ReactModal isOpen={modal}>
                <p>Do you sur to delele {post.title}</p>
                <button onClick={() => deletePostt()}>Yes</button>
                <button onClick={()=>setModal((pre)=>false)}>No</button>
            </ReactModal>
        </>
    )
}