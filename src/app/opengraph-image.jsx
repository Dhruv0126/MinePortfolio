import { ImageResponse } from "next/og";

export const alt = "Dhruv Gupta — AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0a0a0f",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#06b6d4",
            fontFamily: "monospace",
            marginBottom: 16,
          }}
        >
          {"// AI/ML Engineer"}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Dhruv Gupta
        </div>
        <div style={{ fontSize: 28, color: "#adb7be", maxWidth: 700 }}>
          I build RAG systems, computer vision pipelines, and ML products that ship.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
