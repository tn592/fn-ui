import AdoptionHistory from "../components/Adoptions/AdoptionHistory";

const Adoptions = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                My Adoption History
            </h1>
            <AdoptionHistory />
        </div>
    );
};

export default Adoptions;
