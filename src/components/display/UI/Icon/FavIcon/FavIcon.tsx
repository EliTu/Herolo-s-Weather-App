import React from 'react';
import styles from './FavIcon.module.css';
import Icon from '../Icon';
import { faHeart as innerHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as hallowHeart } from '@fortawesome/free-regular-svg-icons';

interface IProps {
	isFavorite: boolean;
}

const FavIcon: React.FC<IProps> = ({ isFavorite }) => {
	const { FavIconStyles } = styles;
	const innerHeartColor = !isFavorite ? 'transparent' : '#cc61f7db';
	const hallowHeartColor = !isFavorite ? '#282828c0' : '#282828c0';

	return (
		<span className="fa-layers fa-fw">
			<Icon iconType={innerHeart} size={'3x'} color={innerHeartColor} />
			<Icon iconType={hallowHeart} size={'3x'} color={hallowHeartColor} />
		</span>
	);
};

export default FavIcon;
