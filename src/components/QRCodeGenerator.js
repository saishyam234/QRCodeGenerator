import { useState } from "react";

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
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <p className="text-lg font-semibold mb-4">Enter your text or URL</p>
      <input
        type="text"
        placeholder="Text or URL"
        value={qrText}
        onChange={(e) => setQrText(e.target.value)}
        className="border p-2 rounded-md w-64 mb-4"
      />
      <button
        onClick={generateQr}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Generate QR Code
      </button>
      {qrSrc && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <img src={qrSrc} alt="QR Code" className="w-40 h-40" />
        </div>
      )}
    </div>
  );
}
