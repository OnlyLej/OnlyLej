export default function SecurityCheck({ onVerified }) {
  console.log("SecurityCheck mounted");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(255,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "24px",
      }}
    >
      OVERLAY IS RENDERING
    </div>
  );
}
