import { ImageWithFallback } from "./figma/ImageWithFallback";
import uniLogo from "../../imports/uniabu-removebg-preview.png";

interface UniLogoProps {
  /** Diameter of the outer circle in pixels */
  size?: number;
}

export function UniLogo({ size = 40 }: UniLogoProps) {
  const padding = Math.round(size * 0.1);
  return (
    <div
      className="rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm"
      style={{ width: size, height: size, padding }}
    >
      <ImageWithFallback
        src={uniLogo}
        alt="University of Abuja crest"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
