import React from 'react';
import Icon from '../Icon';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as hallowHeart } from '@fortawesome/free-regular-svg-icons';

interface IProps {
	isFavorite: boolean;
}

const FavIcon: React.FC<IProps> = ({ isFavorite }) => {
	return (
		<span className="fa-layers fa-fw">
			<Icon iconType={faHeart} size={'3x'} color={'transparent'} />
			<Icon iconType={hallowHeart} size={'3x'} color={'#282828c0'} />
		</span>
	);
};

export default FavIcon;
