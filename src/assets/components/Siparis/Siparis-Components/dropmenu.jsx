export  default function Dropmenu() {
    return (
        <div>
            <form>
              <label for="doughThickness" className="radio-baslik">Hamur Kalınlığı:</label>
              <select id="doughThickness" name="doughThickness">
                <option value="thin">İnce</option>
                <option value="normal">Normal</option>
              </select>
            </form>
        </div>
    )
}