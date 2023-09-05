import IcoMoon, { type IconProps as IconPropsBase } from 'react-icomoon';

import iconSet from './selection.json';
import useStyles from './styles';

// console.log(iconList(iconSet));
const IconNames = [
	'bizcore',
	'hcm',
	'purchase',
	'sales',
	'warehouse',
	'app',
	'sider-collapsed',
	'sider-expanded'
] as const;

export interface IconProps extends Omit<IconPropsBase, 'icon'> {
	icon: (typeof IconNames)[number];
}

export const Icon = ({ className = '', size = 16, onClick, onMouseLeave, onMouseEnter, ...restProps }: IconProps) => {
	const { cx, styles } = useStyles();

	return (
		<IcoMoon
			className={cx({
				[className]: !!className,
				[styles.cursorPointer]: !!onClick || !!onMouseLeave || !!onMouseEnter
			})}
			size={size}
			iconSet={iconSet}
			onClick={onClick}
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
			{...restProps}
		/>
	);
};
