import { LinkProps } from './link';

export type HeroProps = {
  title: string;
  subTitle: string;
  backgroundImage: string;
  backgroundColor: object;
  color?: string;
  size?: string;
  link?: LinkProps;
};
