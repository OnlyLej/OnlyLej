import { Turnstile } from "@marsidev/react-turnstile";

export default function SecurityCheck({ onVerified }) {
  const handleSuccess = () => {
    onVerified();
  };

  return (
    <div className="turnstile-overlay">
      <div className="turnstile-card">
        <Turnstile siteKey="0x4AAAAAACGjTZRbda3DxCbm" options={{ appearance: 'interaction-only' theme: 'auto', size: 'normal', language: 'auto', }} scriptOptions={{ appendTo: 'body' }} onSuccess={handleSuccess} />

      </div>
    </div>
  );
}
