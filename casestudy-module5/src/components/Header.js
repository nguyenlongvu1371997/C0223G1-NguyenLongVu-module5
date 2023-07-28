import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './../css/Header.css'
import { Link } from "react-router-dom";


export default function Header() {
    return(
        <>
        <div class="container-fluid bg-white sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                {/* <button href="index.html" class="navbar-brand">
                <Link to={`/`}><img class="img-fluid" src="https://media.istockphoto.com/id/1432067276/vector/villa-holiday-travel-logo-icon-illustration-brand-identity.jpg?s=612x612&w=0&k=20&c=FAc9TO_HNeyys7zx55O1JOyR8C3NssX5Ji-hqniZSnk=" alt="Logo" /></Link>    
                </button> */}
                <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <button className="nav-item nav-link"><Link to={`/`}>Home</Link></button>
                        <a className="nav-item nav-link active"><Link to={`/serivice/list`}>Service</Link></a>
                        <a class="nav-item nav-link"><Link to={`/employee/list`}>Employee</Link></a>
                        <a class="nav-item nav-link"><Link to={`/customer/list`}>Customer</Link></a>
                        
                        <a href="contact.html" class="nav-item nav-link">Log in</a>
                    </div>
                    <div class="border-start ps-4 d-none d-lg-block">
                        <button type="button" class="btn btn-sm p-0"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
        </>
    )
}
