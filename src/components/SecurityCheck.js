// src/components/SecurityCheck.js
import { Turnstile } from "@marsidev/react-turnstile";

export default function SecurityCheck({ onVerified, onError }) {
  return (
    <div className="turnstile-overlay">
      <div className="turnstile-card">
        <Turnstile
          siteKey="0x4AAAAAADqLZMeWGWhAESqI"
          options={{
            appearance: "always",
            theme: "auto",
            size: "normal",
            language: "auto",
            action: "turnstile-spin-v1",  // ← add this
          }}
          onSuccess={onVerified}
          onError={onError}              // ← add this
        />
      </div>
    </div>
  );
}
