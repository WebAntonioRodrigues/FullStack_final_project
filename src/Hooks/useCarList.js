import { useEffect, useState } from 'react';

function useCarList() {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch('/cars.json')
			.then(res => res.json())
			.then(data => setList(data));
	}, []);
	return { list };
}

export default useCarList;
