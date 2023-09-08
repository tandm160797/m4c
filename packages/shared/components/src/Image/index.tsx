import { cx } from 'antd-style';
import { cloneElement } from 'react';

import { imageSet, type ImageNames } from './imageSet';

export interface ImageProps {
	image: keyof ImageNames;
	width?: string | number;
	height?: string | number;
	className?: string;
	fill?: string;
}

export const Image = ({ image, className = '', fill, ...restProps }: ImageProps) =>
	cloneElement(imageSet[image], {
		className: cx({
			[className]: !!className,
		}),
		fill: fill ?? 'inherit',
		...restProps,
	});
