import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
return (<header>
<h1>Teknolojik Yemekler</h1>
<h4 className="fırsat">Fırsatı Kaçırma</h4>
<p>Kod Acıktırır</p>
<p>Pizza, Doyurur</p>
<Link to="/siparis">
<button>acıktım</button></Link>
</header>
)

}