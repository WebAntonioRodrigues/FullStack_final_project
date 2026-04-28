import useCarList from './useCarList';

function FeaturedCars() {
	const { list } = useCarList();

	const featured = [];

	for (let i = 0; i < 4; i++) {
		if (list[i]) {
			featured.push(list[i]);
		}
	}

	return { featured };
}
export default FeaturedCars;
