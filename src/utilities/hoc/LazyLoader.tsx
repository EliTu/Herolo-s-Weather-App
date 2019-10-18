import React, { Suspense } from 'react';
import Loader from '../../components/display/UI/Loader/Loader';

// A utility HOC for loading components lazily with React Router, implementing Suspense with a fallback for each component that is rendered through the Router
const LazyLoader = (Component: any) => {
	return (props: any) => (
		<Suspense fallback={<Loader />}>
			<Component {...props} />
		</Suspense>
	);
};

export default LazyLoader;
