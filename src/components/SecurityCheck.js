import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

export default function SecurityCheck({ onVerified }) {
  const [verified, setVerified] = useState(false);

  const handleSuccess = (token) => {
    setVerified(true);
    onVerified();
  };

  if (verified) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
