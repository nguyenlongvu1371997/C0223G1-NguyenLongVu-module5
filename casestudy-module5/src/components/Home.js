import Header from "./Header.js"
import Footer from "./Footer.js"
import Navigation from "./Navigation.js"
import "bootstrap/dist/css/bootstrap.css";
import { Carousel,CarouselItemProps } from "react-bootstrap";


export default function Home() {
    return (
        <>
            <Header />
            <Navigation />
            <div id="boby">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFlr9PnpC6jjug00RwsNJGtDM9twKKSzX0lbOZ3RGfQ&s" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://file4.batdongsan.com.vn/2020/06/03/JGcIp0rf/20200603142344-7089.jpg" alt="Third slide" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}