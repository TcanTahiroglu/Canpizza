export default function Radio() {

return (

    <div> 
         <span>Boyut Seç</span>
        
        <form>
  <label>
    <input type="radio" name="pizzaSize" value="small" /> Küçük
  </label>
  <label>
    <input type="radio" name="pizzaSize" value="medium" /> Orta
  </label>
  <label>
    <input type="radio" name="pizzaSize" value="large" /> Büyük
  </label>
</form>
</div>  
)

}