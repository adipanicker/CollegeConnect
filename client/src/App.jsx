import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((res) => setMsg(res.data.message))
      .catch((err) => console.log(err));
  }, []);
  //test
  return (
    <div className="flex items-center justify-center min-h-screen text-red-100 font-bold">
      {msg || "Loading.."}
    </div>
  );
}

export default App;
