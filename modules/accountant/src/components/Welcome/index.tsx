import { Button } from 'antd';
import { type FC } from 'react';
import { toast } from 'react-toastify';

import { useQueryString } from '@biso24/hooks';
import useStyles from '@components/Welcome/styles';

const Welcome: FC = (): JSX.Element => {
	const { styles, cx } = useStyles();

	const [planYear] = useQueryString('planYear', new Date().getFullYear());
	const [abc, setAbc] = useQueryString('abc', new Date().getFullYear());
	const [abc2, setAbc2] = useQueryString('abc', new Date().getFullYear() + 100);

	return (
		<div>
			<div className={styles.testREM}>abcd - rem</div>
			<h1 className={cx(styles.testCSS)}>Welcome</h1>
			<h3>Plan year: {planYear}</h3>
			<h3>
				Abc: {abc} = {abc2}
			</h3>
			<Button
				onClick={() => {
					toast.success('abc');
					setAbc(Number(abc) + 1);
					setAbc2(Number(abc) + 1);
				}}
			>
				Ok
			</Button>
		</div>
	);
};

export default Welcome;
