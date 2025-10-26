import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";
import { FaPaw } from "react-icons/fa";

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
		<section className="bg-base-100">
			<div className="max-w-7xl mx-auto py-16 px-6">
				{/* HEADER */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-10">
					<div className="text-center md:text-left mb-4 md:mb-0">
						<h2 className="text-4xl font-bold flex items-center justify-center md:justify-start gap-2">
							<FaPaw className="text-secondary text-3xl" />
							<span>Meet Our Lovely Pets</span>
						</h2>
						<p className="text-gray-500 mt-2 text-sm md:text-base">
							Friendly faces waiting to bring joy into your home
							🏡
						</p>
					</div>
					<a
						href="/shop"
						className="btn btn-outline btn-secondary rounded-full px-8"
					>
						View All
					</a>
				</div>

				{/* LOADING */}
				{isLoading && (
					<div className="flex justify-center items-center py-20">
						<span className="loading loading-ring loading-lg text-secondary"></span>
					</div>
				)}

				{/* ERROR */}
				{error && <ErrorAlert error={error} />}

				{/* SLIDER */}
				{!isLoading && !error && pets.length > 0 && (
					<div className="relative">
						<Swiper
							modules={[Navigation]}
							spaceBetween={12}
							slidesPerView={1}
							navigation={{
								nextEl: ".custom-next",
								prevEl: ".custom-prev",
							}}
							breakpoints={{
								640: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
								1280: { slidesPerView: 3 },
							}}
							className="pb-10"
						>
							{pets.map((pet) => (
								<SwiperSlide key={pet.id}>
									<div className="p-2 h-full">
										<div>
											<PetCard pet={pet} />
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Custom Navigation Buttons */}
						<button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-base-200 shadow-md hover:bg-secondary hover:text-white transition rounded-full w-10 h-10 flex items-center justify-center z-10">
							❮
						</button>
						<button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-base-200 shadow-md hover:bg-secondary hover:text-white transition rounded-full w-10 h-10 flex items-center justify-center z-10">
							❯
						</button>
					</div>
				)}

				{/* EMPTY */}
				{!isLoading && !error && pets.length === 0 && (
					<p className="text-center text-gray-500 mt-10">
						No pets available right now. Please check back soon!
					</p>
				)}
			</div>
		</section>
	);
};

export default Pet;
