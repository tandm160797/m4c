import { useCallback, useEffect, useState } from 'react';

import { getQueryStringValue, setQueryStringValue } from './queryString';

const useQueryString = (key: string, initialValue: any) => {
	const [value, setValue] = useState(getQueryStringValue(key) || initialValue);
	const handleSetValue = useCallback(
		(newValue: any) => {
			setValue(newValue);
			setQueryStringValue(key, newValue);
		},
		[key],
	);

	useEffect(() => {
		if (!getQueryStringValue(key) && ![null, undefined, ''].includes(initialValue)) {
			setQueryStringValue(key, initialValue);
		}
	}, [key]);

	return [value, handleSetValue];
};

export default useQueryString;
