import React from 'react';
import styles from './Icon.module.css';
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IProps {
	iconType: IconDefinition;
	size: FontAwesomeIconProps['size'];
	pulse?: boolean;
	spin?: boolean;
}

const Icon: React.FC<IProps> = ({ iconType, size, pulse, spin }) => {
	const { IconStyles } = styles;

	return (
		<div className={IconStyles}>
			<FontAwesomeIcon
				icon={iconType}
				size={size}
				pulse={pulse}
				spin={spin}
			/>
		</div>
	);
};

export default Icon;
