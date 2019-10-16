import { useRef, useCallback, useEffect } from 'react';

// Hook to detect clicks ourside of a certain node, and run a function in response on that node:
const useClickOutside = (
	isDisplayed: boolean,
	callbackFn: () => void
): React.RefObject<any> => {
	const boxRef: React.RefObject<any> = useRef();
	const handleOutsideClick = useCallback(
		event => {
			if (isDisplayed && !boxRef.current.contains(event.target)) {
				callbackFn();
			}
		},
		[callbackFn, isDisplayed]
	);

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => document.removeEventListener('click', handleOutsideClick);
	}, [handleOutsideClick]);

	return boxRef;
};

export default useClickOutside;
