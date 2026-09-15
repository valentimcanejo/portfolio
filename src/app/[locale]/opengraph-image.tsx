import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getProfile } from "@/content";
import { LAYER_ORDER } from "@/lib/layers";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LAYER_COLOR: Record<string, string> = {
  interface: "#eb9d3f",
  application: "#46a89f",
  data: "#d3665a",
  infra: "#8a8471",
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Image({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;

  const profile = getProfile(locale);
  const hero = await getTranslations({ locale, namespace: "hero" });
  const layers = await getTranslations({ locale, namespace: "layers" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14171c",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 28, fontWeight: 700, color: "#f1eee4" }}>
            RV<span style={{ color: "#eb9d3f" }}>_</span>
          </div>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 24, color: "#46a89f" }}>
            {hero("eyebrow")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#f1eee4", letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#a8a290", marginTop: 16, maxWidth: 980 }}>
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {LAYER_ORDER.map((layer) => (
            <div
              key={layer}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: `2px solid ${LAYER_COLOR[layer]}`,
                borderRadius: 6,
                padding: "10px 18px",
                fontFamily: "monospace",
                fontSize: 20,
                color: LAYER_COLOR[layer],
                textTransform: "uppercase",
              }}
            >
              {layers(`${layer}.label`)}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
