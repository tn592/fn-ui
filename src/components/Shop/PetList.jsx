import PetCard from "../Pets/PetCard";

const PetList = ({ pets, loading }) => {
	if (loading)
		return (
			<div className="flex justify-center items-center py-20">
				<span className="loading loading-dots loading-lg text-pink-500"></span>
			</div>
		);

	if (pets.length === 0)
		return (
			<div className="flex justify-center items-center py-20">
				<span className="loading loading-dots loading-lg text-pink-500"></span>
			</div>
		);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{pets.map((pet) => (
				<PetCard pet={pet} key={pet.id} />
			))}
		</div>
	);
};

export default PetList;
