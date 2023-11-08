import { Box } from "@mui/material";
import { useState } from "react";
import notImage from "../../assets/not-image.png";
interface Props {
  src: string;
  width: number;
  height: number;
  borderRadius?: string;
  alt?: string;
}

const NoImage = ({ src, width, height, borderRadius = "12px", alt }: Props) => {
  const [srcUrl, setSrcUrl] = useState(src);
  return (
    <Box
      component="img"
      src={srcUrl}
      width={width}
      height={height}
      alt={alt}
      style={{ borderRadius: borderRadius }}
      onError={(e) => {
        e.currentTarget.onerror = null;
        setSrcUrl(notImage);
      }}
    />
  );
};

export default NoImage;
