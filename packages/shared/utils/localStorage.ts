import ms from 'ms';

const localStorage = {
	...window.localStorage,
	createStorage: (name: string, ttl?: string) => {
		const storage = JSON.parse(window.window.localStorage.getItem(name) || '{}');
		const save = () => {
			window.window.localStorage.setItem(name, JSON.stringify(storage));
		};

		if (!ttl) {
			return {
				setItem: (key: string, value: any) => {
					const item = { value };

					storage[key] = item;
					save();
				},

				getItem: (key: string) => {
					const item = storage[key];

					if (!item) return null;
					return item.value;
				},
			};
		}

		return {
			setItem: (key: string, value: any) => {
				const exp = Date.now() + ms(ttl);
				const item = { value, exp };

				storage[key] = item;
				save();
			},

			getItem: (key: string) => {
				const item = storage[key];

				if (!item) return null;
				if (Date.now() <= item.exp) return item.value;
				return null;
			},
		};
	},
};

export default localStorage;
