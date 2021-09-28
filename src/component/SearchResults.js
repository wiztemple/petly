import Pet from "./Pet";

const SearchResults = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (<div>
        <h1 className="text-5xl text-appred pt-10 font-medium">No Pets found</h1>
      </div>) : (
        <>
          <h1 className="text-2xl font-medium md:pt-20 dark:text-gray-300">Search Results</h1>
          <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
            {pets.map(pet => {
              return <Pet
                key={pet.id}
                name={pet.name}
                images={pet.images}
                city={pet.city}
                state={pet.state}
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
