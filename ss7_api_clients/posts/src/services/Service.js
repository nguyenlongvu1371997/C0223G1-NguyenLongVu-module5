import axios from "axios";

export async function getPosts() {
    try {
        const res = await axios.get('http://localhost:8080/post')
        return res.data;
    } catch (e) {
        return [];
    }
}

export async function creatPost(post) {
    try {
        axios.post('http://localhost:8080/post', post);
        return 0;
    } catch (e) {
        return 1;
    }

}