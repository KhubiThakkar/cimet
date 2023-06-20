import { useEffect, useState } from "react";
import { generateToken } from "./api/apiCalls";

export default function HomePage() {
  const [tokenState, setTokenState] = useState("");
  useEffect(() => {
    generateToken()
      .then((token) => {
        console.log("token: ", token);
        setTokenState(token);
      })
      .catch((error) =>
        console.error("Token generation failed:", error.message)
      );
  }, []);
  return (
    <div>
      <h2>This is HomePage</h2>
      <p>{tokenState}</p>
    </div>
  );
}
