import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 17,
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
