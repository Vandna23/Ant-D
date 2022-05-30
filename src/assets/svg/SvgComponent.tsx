import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.85 7.666c-.505 0-.936.306-1.09.795h-3.998v3.131h-2.058c.05-.294.065-.544.065-.82a4.3 4.3 0 0 0-3.926-4.277v-2.78h5.613c.153.44.583.77 1.09.77.633 0 1.149-.521 1.149-1.155s-.516-1.14-1.15-1.14c-.506 0-.936.302-1.09.791H13.11v3.514c-.881.078-1.713.441-2.398 1v-.991H6.015V3.239c.489-.153.795-.584.795-1.09C6.81 1.517 6.3 1 5.666 1c-.634 0-1.159.516-1.159 1.15 0 .505.334.936.774 1.09v3.998h4.697v1.057a8.442 8.442 0 0 0-.297.557H3.239a1.119 1.119 0 0 0-1.09-.795C1.517 8.057 1 8.567 1 9.201c0 .634.516 1.159 1.15 1.159.505 0 .936-.333 1.09-.774h6.15a4.076 4.076 0 0 0-.17 1.199c0 .561.108 1.052.306 1.59H6.37a1.119 1.119 0 0 0-1.09-.795c-.633 0-1.149.51-1.149 1.143 0 .634.516 1.16 1.15 1.16.505 0 .936-.334 1.09-.774h3.535c.411.587 1.001 1.127 1.637 1.47v3.667H9.11a1.119 1.119 0 0 0-1.09-.795c-.633 0-1.15.51-1.15 1.143 0 .634.517 1.16 1.15 1.16.506 0 .936-.334 1.09-.774h3.167v-4.11c.391.111.783.171 1.199.171.714 0 1.394-.176 1.98-.487v4.034h2.434c.154.44.584.77 1.09.77.633 0 1.15-.521 1.15-1.155s-.517-1.14-1.15-1.14c-.506 0-.936.302-1.09.791h-1.7v-3.787a4.151 4.151 0 0 0 1.304-1.741h3.002V9.195h3.265a1.151 1.151 0 0 0 2.24-.38c-.001-.633-.517-1.15-1.15-1.15Zm-4.305-4.758a.416.416 0 1 1 0 .833.416.416 0 0 1 0-.833ZM5.672 2.566a.416.416 0 1 1 .001-.833.416.416 0 0 1 0 .833ZM2.15 9.61a.416.416 0 1 1 0-.833.416.416 0 0 1 0 .833Zm3.13 3.522a.416.416 0 1 1 .002-.833.416.416 0 0 1-.001.833Zm2.74 5.871a.416.416 0 1 1 .002-.833.416.416 0 0 1-.001.833Zm10.96-1.223a.416.416 0 1 1-.001.833.416.416 0 0 1 0-.833Zm-5.48-3.474a3.551 3.551 0 0 1-3.547-3.547A3.551 3.551 0 0 1 13.5 7.213a3.551 3.551 0 0 1 3.547 3.547 3.551 3.551 0 0 1-3.547 3.547ZM24.85 9.22a.416.416 0 1 1 .001-.833.416.416 0 0 1 0 .833Z"
      fill={props.fill}
      stroke="#737B7D"
      strokeWidth={0.4}
    />
  </svg>
);

export default SvgComponent;