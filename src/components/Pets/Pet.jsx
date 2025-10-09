import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";

const Pet = () => {
	const [pets, setPets] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState("");
	useEffect(() => {
		setLoading(true);
		apiClient
			.get("/pets/")
			.then((res) => setPets(res.data.results))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);
	return (
		<section className="bg-gray-50">
			<div className="py-12 px-4 max-w-7xl mx-auto">
				<div className="flex justify-between items-center px-4 md:px-8 mb-4">
					<h2 className="text-3xl md:text-4xl font-bold">
						Trending Product
					</h2>
					<a
						href="#"
						className="btn btn-secondary px-6 py-6 rounded-full text-lg"
					>
						View All
					</a>
				</div>
				{/*Spinner*/}
				{isLoading && (
					<div className="flex justify-center items-center py-10">
						<span className="loading loading-spinner text-secondary loading-xl"></span>
					</div>
				)}

				{error && <ErrorAlert error={error} />}

				{/*Pet Slider*/}
				{!isLoading && !error && setPets.length > 0 && (
					<Swiper
						modules={[Navigation]}
						spaceBetween={10}
						slidesPerView={1}
						navigation
						breakpoints={{
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						className="mt-4 px-4 container"
					>
						{pets.map((pet) => (
							<SwiperSlide
								key={pet.id}
								className="flex justify-center"
							>
								<PetCard
									key={pet.id}
									pet={pet}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				)}
				{!isLoading && !error && pets.length === 0 && (
					<p className="text-center text-gray-500 mt-6">
						No Pets Available
					</p>
				)}
			</div>
		</section>
	);
};

export default Pet;