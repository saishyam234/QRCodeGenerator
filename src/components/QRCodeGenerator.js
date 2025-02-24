import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function QRCodeGenerator() {
  const [qrText, setQrText] = useState("");
  const [qrSrc, setQrSrc] = useState("");

  const generateQr = () => {
    if (qrText.trim().length > 0) {
      setQrSrc(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`
      );
    } else {
      alert("Please enter a valid text or URL");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center p-4 bg-light min-vh-100">
      <p className="fs-5 fw-semibold mb-3">Enter your text or URL</p>
      <input
        type="text"
        placeholder="Text or URL"
        value={qrText}
        onChange={(e) => setQrText(e.target.value)}
        className="form-control w-50 mb-3"
      />
      <button
        onClick={generateQr}
        className="btn btn-primary px-4 py-2"
      >
        Generate QR Code
      </button>
      {qrSrc && (
        <div className="mt-4 p-3 bg-white rounded shadow">
          <img src={qrSrc} alt="QR Code" className="w-100 h-auto" />
        </div>
      )}
    </div>
  );
}
