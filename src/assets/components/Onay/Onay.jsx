import "./Onay.css";

export default function Onay({ orderDetails }) {    
    return (
        <div className="onay"> 
            <h1 className="sipBaslik">Teknolojik Yemekler</h1>
            <p>TEBRİKLER!</p>
            <p>SİPARİŞİNİZ ALINDI!</p>
            <div className="siparis-detaylari">
                <h2>Sipariş Detayları:</h2>
                <ul>
                    <li><strong>İsim:</strong> {orderDetails.name}</li>
                    <li><strong>Boyut:</strong> {orderDetails.size}</li>
                    <li>
                        <strong>Malzemeler:</strong>{" "}
                        {orderDetails.toppings.length > 0
                            ? orderDetails.toppings.join(", ")
                            : "Hiçbir malzeme seçilmedi"}
                    </li>
                    <li><strong>Adet:</strong> {orderDetails.count}</li>
                    <li><strong>Fiyat:</strong> {orderDetails.price} TL</li>
                </ul>
            </div>
        </div>
    );
}
