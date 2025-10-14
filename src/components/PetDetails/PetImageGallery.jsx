import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/default_image.jpg";

const PetImageGallery = ({ images = [], PetName }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const displayImages =
		images.length > 0 ? images : [{ image: defaultImage }];

	return (
		<div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden p-3">
			{/* Main Image Slider */}
			<Swiper
				modules={[Navigation, Thumbs]}
				navigation
				thumbs={{
					swiper:
						thumbsSwiper && !thumbsSwiper.destroyed
							? thumbsSwiper
							: null,
				}}
				className="rounded-xl"
				spaceBetween={10}
			>
				{displayImages.map((imageObj, index) => (
					<SwiperSlide key={index}>
						<div className="aspect-square bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
							<img
								src={imageObj.image}
								alt={PetName}
								className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Thumbnail Slider */}
			<Swiper
				onSwiper={setThumbsSwiper}
				modules={[Thumbs]}
				spaceBetween={12}
				slidesPerView={5}
				watchSlidesProgress
				className="mt-3"
			>
				{displayImages.map((imageObj, index) => (
					<SwiperSlide key={index}>
						<div className="aspect-square rounded-lg overflow-hidden border border-transparent hover:border-blue-400 cursor-pointer transition-all duration-300">
							<img
								src={imageObj.image}
								alt={`${PetName} thumbnail ${index + 1}`}
								className="h-full w-full object-cover"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default PetImageGallery;
