import { Button } from 'antd';
import { type FC } from 'react';
import { toast } from 'react-toastify';

import useStyles from '@components/Welcome/styles';

const Welcome: FC = (): JSX.Element => {
	const { styles, cx } = useStyles();

	return (
		<div>
			<div className={styles.testREM}>abcd - rem</div>
			<h1 className={cx(styles.testCSS)}>Welcome</h1>
			<Button onClick={() => toast.success('abc')}>Ok</Button>
		</div>
	);
};

export default Welcome;
