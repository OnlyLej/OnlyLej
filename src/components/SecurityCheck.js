import { Turnstile } from "@marsidev/react-turnstile";

export default function SecurityCheck({ onVerified }) {
  return (
    <div className="turnstile-overlay">
      <div className="turnstile-card">
        <Turnstile
          siteKey="0x4AAAAAACGjTZRbda3DxCbm"
          options={{
            appearance: "always",
            theme: "auto",
            size: "normal",
            language: "auto",
          }}
          onSuccess={onVerified}
        />
      </div>
    </div>
  );
}
