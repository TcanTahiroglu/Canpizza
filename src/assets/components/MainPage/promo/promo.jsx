
import "./promo.css"
import SiparisButton from "./siparisButton"
export default function Promo() {
return (
    <><div className="promo1">
        <h1>Özel</h1>
        <h4>Lezzetus</h4>
        <p>position:absolute Acı Burger</p>
    <SiparisButton />
    </div><div className="promo2">
        <p>Hackathlon</p>
        <p>Burger Menü</p>
    <SiparisButton />
    </div>
    <div className="promo3">
        <p><span className="highlight">Çooooook</span> hızlı</p>
        <p>npm gibi kurye</p>
    <SiparisButton />
    </div>
        
        
        </>

)


}