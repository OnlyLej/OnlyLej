import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

export default function SecurityCheck({ onVerified }) {
  const [verified, setVerified] = useState(false);

  const handleVerify = (token) => {
    setVerified(true);
    onVerified();
  };

  if (verified) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Turnstile
        siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY} // <-- use env variable
        onVerify={handleVerify}
      />
    </div>
  );
}
