import React from 'react';
import { createRoot } from 'react-dom/client';

import { Providers } from '@biso24/components';
import App from 'App';

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Providers moduleName="Accountant">
			<App />
		</Providers>
	</React.StrictMode>,
);
