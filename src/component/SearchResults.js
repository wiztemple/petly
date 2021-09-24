import Pet from "./Pet";

const SearchResults = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (<h1>No Pets found</h1>) : (
        <>
          <h1 className="text-2xl font-medium md:pt-20 dark:text-gray-300">Search Results</h1>
          <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
            {pets.map(pet => {
              return <Pet
                key={pet.id}
                name={pet.name}
                images={pet.images}
                location={pet.location}
                breed={pet.breed}
                animal={pet.animal}
                id={pet.id}
              />
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default SearchResults;
