import PetCard from "../Pets/PetCard";

const PetList = ({ pets, loading }) => {
	if (loading)
		return (
			<div className="flex justify-center items-center py-20">
				<span className="loading loading-dots loading-lg text-pink-500"></span>
			</div>
		);

	if (!pets || pets.length === 0)
		return (
			<div className="text-center py-20 text-gray-600">
				<p>No pets found</p>
			</div>
		);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-6 place-items-center">
			{pets.map((pet) => (
				<PetCard pet={pet} key={pet.id} />
			))}
		</div>
	);
};

export default PetList;
