import Header from "./Header.js"
import Footer from "./Footer.js"
import Navigation from "./Navigation.js"


export default function CustomerList() {
    return (
        <>
            <Header />
            <Navigation />
            <tbody>
                <h1>Đây là danh sách khách hàng</h1>
            </tbody>
            <Footer />
        </>
    )
}