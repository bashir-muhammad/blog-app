import type { ImgHTMLAttributes } from "react";

type StaticImportLike = {
  src: string;
};

interface NextImageMockProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | StaticImportLike;
  fill?: boolean;
  priority?: boolean;
}

const NextImageMock = ({
  src,
  alt = "",
  fill,
  priority,
  ...rest
}: NextImageMockProps) => {
  const normalizedSrc = typeof src === "string" ? src : src.src;

  void fill;
  void priority;

  return <img src={normalizedSrc} alt={alt} {...rest} />;
};

export default NextImageMock;
