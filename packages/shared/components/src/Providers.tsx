import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'antd-style';
import { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from '@biso24/components';
import { type Modules } from '@biso24/constants';
import { customToken, theme } from '@biso24/theme';

const staleTime = 20000;

const getTimeBySecondAgo = (second: number) => {
	const date = new Date();
	date.setSeconds(date.getSeconds() - second);
	return date.getMilliseconds;
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime,
			initialDataUpdatedAt: getTimeBySecondAgo(staleTime / 1000)
		}
	}
});

export interface ProvidersProps {
	moduleName: keyof typeof Modules;
	children: ReactNode;
}

export const Providers = ({ moduleName, children }: ProvidersProps) => (
	<BrowserRouter basename={moduleName}>
		<ToastContainer draggable={false} autoClose={3000} />

		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />

			<ThemeProvider theme={theme} customToken={customToken}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	</BrowserRouter>
);
