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
    <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} className='fixed bottom-4 right-4' options={{ theme: 'auto', size: 'normal', language: 'auto', }} scriptOptions={{ appendTo: 'body' }} onSuccess={() => handleSuccess()}/>
  );
}
