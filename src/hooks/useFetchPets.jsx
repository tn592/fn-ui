import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchPet = (currentPage, selectedCategory, searchQuery) => {
	const [pets, setPets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchPets = async () => {
			setLoading(true);
			const url = `/pets/?page=${currentPage}&category=${selectedCategory}&search=${searchQuery}`;
			try {
				const response = await apiClient.get(url);
				const data = await response.data;
				setPets(data.results);
				setTotalPages(
					data.results.length > 0
						? Math.ceil(data.count / data.results.length)
						: 1,
				);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchPets();
	}, [currentPage, selectedCategory, searchQuery]);

	return { pets, loading, totalPages };
};

export default useFetchPet;
