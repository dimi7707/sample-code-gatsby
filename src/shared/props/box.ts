import { LinkProps } from './link';

export type BoxProps = {
  iconType: boolean;
  image: string;
  title: string;
  link: LinkProps;
  className?: string;
  hasBorder?: boolean; 
};
