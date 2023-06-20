import { useEffect, useState } from "react";
import { generateToken } from "./api/apiCalls";
import Button from "@mui/material/Button";

export default function HomePage() {
  const [tokenState, setTokenState] = useState("");

  // useEffect(() => {}, []);

  function handleToken() {
    generateToken()
      .then((token) => {
        setTokenState(token);
      })
      .catch((error) =>
        console.error("Token generation failed:", error.message)
      );
  }

  return (
    <div>
      <h2>This is HomePage</h2>
      <Button
        onClick={() => {
          handleToken();
        }}
      >
        Generate Token
      </Button>
      <p>{tokenState}</p>
    </div>
  );
}
