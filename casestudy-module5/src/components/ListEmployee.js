import Header from "./Header.js"
import Footer from "./Footer.js"
import Navigation from "./Navigation.js"


export default function EmployeeList() {
    return (
        <>
            <Header />
            <Navigation />
            <tbody>
            <h1>Đây là danh sách nhân viên</h1>
            </tbody>
            <Footer />
        </>
    )
}