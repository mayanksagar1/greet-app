import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const fetchGreeting = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Failed to fetch greeting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Greeting App</h1>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 p-2 rounded mb-4 w-full" />
        <button onClick={fetchGreeting} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Get Greeting
        </button>
        {message && <p className="mt-4 text-lg text-violet-700 font-bold">{message}</p>}
      </div>
    </div>
  );
}

export default App;
