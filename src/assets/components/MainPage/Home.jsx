import Aralik from "./aralik/aralik";
import Footer from "./footer/footer";
import Header from "./header/header";
import Navbar from "./nav/navbar";
import Product from "./product/product";
import Promo from "./promo/promo";
import "../MainPage/Home.css";

export default function Home() {
  
return (
    <div>
    <Header />
    <Navbar />
    <Promo />
    <Aralik />
    <Navbar />
    <Product />
    <Footer />
    </div>
)
}