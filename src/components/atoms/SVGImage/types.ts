export interface ISVGImageProps extends React.SVGProps<SVGSVGElement> {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: string | number;
  height?: string | number;
  color?: string;
}
