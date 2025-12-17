import { Turnstile } from "@marsidev/react-turnstile";

export default function SecurityCheck({ onVerified }) {
  const handleSuccess = () => {
    onVerified();
  };

  return (
    <div className="turnstile-overlay">
      <div className="turnstile-card">
        <Turnstile
          siteKey="0x4AAAAAACGjTZRbda3DxCbm"
          onSuccess={onVerified}
          options={{ appearance: "interaction-only" }}
        />
      </div>
    </div>
  );
}
