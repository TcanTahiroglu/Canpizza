export default function Musteri({ name, setName }) {
    const handleNameChange = (event) => {
      const enteredName = event.target.value;
      setName(enteredName); // İsmi üst bileşene gönder
      console.log("Entered Name:", enteredName); // Kontrol
    };
  
    return (
      <div>
        <label>
          İsim:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="İsminizi girin"
          />
        </label>
      </div>
    );
  }
  