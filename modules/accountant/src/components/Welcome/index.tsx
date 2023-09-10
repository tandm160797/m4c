import { Button } from 'antd';
import { type FC } from 'react';
import { toast } from 'react-toastify';

import useQueryString from '@biso24/hooks/useQueryString';
import useStyles from '@components/Welcome/styles';
import { axiosClient } from '@services';
import { useQuery } from '@tanstack/react-query';

const Welcome: FC = (): JSX.Element => {
	const { styles, cx } = useStyles();

	const [planYear] = useQueryString('planYear', new Date().getFullYear());
	const [abc, setAbc] = useQueryString('abc', new Date().getFullYear());
	const [abc2, setAbc2] = useQueryString('abc', new Date().getFullYear() + 100);

	useQuery({
		initialData: null,
		queryKey: ['1'],
		queryFn: async () => {
			const data = await axiosClient.get('https://jsonplaceholder.typicode.com/todos/1');

			console.log(data);

			return 123;
		},
	});

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
