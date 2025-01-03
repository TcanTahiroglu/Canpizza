import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
return (<header className="hero">
<h1 className="baslik">Teknolojik Yemekler</h1>
<div className="banner">
<p>Kod Acıktırır</p>
<p>Pizza, Doyurur</p>
</div>
<Link to="/siparis">
<button>acıktım</button></Link>
</header>
)

}