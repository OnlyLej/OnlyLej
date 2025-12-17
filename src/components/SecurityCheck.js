import { Turnstile } from "@marsidev/react-turnstile";

export default function SecurityCheck({ onVerified }) {
  const handleSuccess = () => {
    onVerified();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Turnstile siteKey="0x4AAAAAACGjTZRbda3DxCbm" options={{ theme: 'auto', size: 'normal', language: 'auto', }} scriptOptions={{ appendTo: 'body' }} onSuccess={handleSuccess} />
    </div>
  );
}
