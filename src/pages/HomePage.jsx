import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input || file) {
      navigate("/viewer");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">3DGenAI</h1>
      <textarea
        className="w-full p-2 border"
        rows="4"
        placeholder="Describe the 3D model you want..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
        Generate 3D Model
      </button>
    </div>
  );
}

export default HomePage;
