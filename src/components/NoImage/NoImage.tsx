import { Box } from "@mui/material";
import { useState } from "react";
import notImage from "../../assets/not-image.png";
import { ResponsiveStyleValue, Theme } from '@mui/system';
import { Property } from 'csstype';

interface Props {
  src: string;
  width: ResponsiveStyleValue<Property.Width<string | number> | NonNullable<Property.Width<string | number> | undefined>[] | undefined> | ((theme: Theme) => ResponsiveStyleValue<Property.Width<string | number> | NonNullable<Property.Width<string | number> | undefined>[] | undefined>);
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
