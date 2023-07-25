import React from "react";
import { Link } from "react-router-dom";
import { GetBookList, DeleteBook } from "../service/BookService";
import { useState, useEffect } from "react";

export default function ListBook() {
    const [listBook, setListBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            const data = await GetBookList();
            setListBook(data);
        }
        getBook();
    }, []);

    delete ((id) => {
        DeleteBook(id)
    })

    return (
        <>
            <h1>Library</h1>
            <button >
                <Link to="/book/create">Create</Link>
            </button>
            <table border={1}>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {listBook.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button>
                                    <Link to={`/book/edit/${book.id}`}>Edit</Link>
                                </button>
                            </td>
                            <td><button onClick={delete (book.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}