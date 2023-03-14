import React, { useState, useEffect } from 'react';
import * as svgSources from './svg';

interface LoadingProps {
  color?: string;
  delay?: number;
  type?: string;
  height?: string | number;
  width?: string | number;
}

interface SvgSources {
  [key: string]: string;
}

const Loading: React.FC<LoadingProps> = ({
  color = 'green',
  delay = 0,
  type = 'balls',
  height = 64,
  width = 64,
  ...restProps
}) => {
  const [delayed, setDelayed] = useState<boolean>(delay > 0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (delayed) {
      timeout = setTimeout(() => {
        setDelayed(false);
      }, delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [delay, delayed]);

  const selectedType = delayed ? 'blank' : type;
  const svg = (svgSources as SvgSources)[selectedType];

  const style = {
    fill: color,
    height: Number(height) || height,
    width: Number(width) || width,
  };

  return (
    <div style={style} {...restProps}>
      <img src={svg} alt="Loading" />
    </div>
  );
};

export default Loading;
