import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/default_image.jpg";

const PetImageGallery = ({ images, PetName }) => {
	const [thumbsSwiper] = useState(null);

	const displayImages =
		images.length > 0 ? images : [{ image: defaultImage }];

	return (
		<div className="border border-base-300 rounded-xl overflow-hidden shadow-sm bg-white">
			<Swiper
				modules={[Navigation, Thumbs]}
				navigation
				thumbs={{
					swiper:
						thumbsSwiper && !thumbsSwiper.destroyed
							? thumbsSwiper
							: null,
				}}
				className="pet-main-slider"
			>
				{displayImages.map((imageObj, index) => (
					<SwiperSlide key={index}>
						<div className="aspect-square bg-base-100 flex items-center justify-center">
							<img
								src={imageObj.image}
								alt={PetName}
								className="h-full w-full object-contain"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default PetImageGallery;
