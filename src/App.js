import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode
      (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="container-fluid">
      <div className="my-5 d-flex flex-column align-items-center">
        <h1 className="text-center">QR Code Generator</h1>
        <div id="inputText" class="mt-3 w-50 input-group">
          <input type="text" className="form-control" onChange={
            (e) => { setTemp(e.target.value) }}
            placeholder="Enter text to encode" />
          <button type="button" className="btn btn-outline-warning input-group-text"
            onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>
      <div className="text-center">
        <div className="d-inline-flex">
          <label for="color" className="form-label"><h5>Background Color:</h5></label>
          <input type="color" id="color" className="form-control" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} />
          <label for="customRange" class="form-label ms-3"><h5>Dimension:</h5></label>
          <input type="range" className="form-range" min="200" max="600" id="customRange"
            value={size} onChange={(e) => { setSize(e.target.value) }} />
        </div>
      </div>
      <div className="my-5 d-flex flex-column align-items-center">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button" className="mt-5 btn btn-outline-success">Download</button>
        </a>
      </div>
    </div>
  );
}

export default App;
