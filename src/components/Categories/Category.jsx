import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import apiClient from "../../services/api-client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Category = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		apiClient
			.get("/categories")
			.then((res) => setCategories(res.data))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center py-20">
				<div className="w-16 h-16 border-4 border-dashed rounded-full border-primary animate-spin"></div>
			</div>
		);
	}

	return (
		<section className="py-14 bg-base-100">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<div className="flex justify-center items-center mb-10">
					<h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
						Categories
					</h2>
				</div>

				{/* Swiper Carousel */}
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					slidesPerView={1}
					spaceBetween={30}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 3500, disableOnInteraction: false }}
					className="category-swiper"
				>
					{categories.map((category, index) => (
						<SwiperSlide key={category.id}>
							<CategoryList index={index} category={category} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Category;
