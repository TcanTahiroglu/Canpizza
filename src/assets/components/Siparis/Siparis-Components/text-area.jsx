export default function TextArea() {

    return (
        <div>
            <form>
            <h2>Sipariş Notu</h2>
            <label for="orderNote">Siparişine eklemek istediğin bir not var mı?</label>
            <textarea id="orderNote" name="orderNote" rows="4" cols="50" placeholder="Notunuzu buraya yazabilirsiniz..."></textarea>
            </form>
        </div>)
}