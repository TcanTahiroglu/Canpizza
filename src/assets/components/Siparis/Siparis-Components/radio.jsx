export default function Radio({ setSize }) {
  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize); 
    console.log("Selected Size:", selectedSize);
  };

  return (
    <div>
      <label>
        <input type="radio" value="small" name="size" onChange={handleSizeChange} />
        Küçük
      </label>
      <label>
        <input type="radio" value="medium" name="size" onChange={handleSizeChange} />
        Orta
      </label>
      <label>
        <input type="radio" value="large" name="size" onChange={handleSizeChange} />
        Büyük
      </label>
    </div>
  );
}
