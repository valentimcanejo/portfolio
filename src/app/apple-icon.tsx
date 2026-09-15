import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14171c",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 84,
          color: "#f1eee4",
        }}
      >
        RV
        <span style={{ color: "#d8842a" }}>_</span>
      </div>
    ),
    { ...size },
  );
}
