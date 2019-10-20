const fahrenheitToCelsius = (fahrenheitValue: number): number => {
	return Math.round(((fahrenheitValue - 32) * 5) / 9);
};

export default fahrenheitToCelsius;
