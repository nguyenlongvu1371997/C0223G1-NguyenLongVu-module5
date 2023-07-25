import axios from "axios";

export async function GetBookList() {
    const res = await axios.get("http://localhost:8080/books");
    return res.data;
}

export async function AddBook(book) {
    await axios.post("http://localhost:8080/books", book);
}

export async function EditBook(book) {
    await axios.put("http://localhost:8080/books/" + book.id, book);
}

export async function DeleteBook(id) {
    await axios.delete("http://localhost:8080/books/" + id);
}