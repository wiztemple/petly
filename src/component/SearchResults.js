import Pet from "./Pet";

// const pets = [
//   {
//     "id": 1,
//     "name": "Luna",
//     "animal": "Dog",
//     "breed": "Rotweiler",
//     "image": "https://images.unsplash.com/photo-1598134493202-9a02529d86bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//     "location": "Seattle, WA"
//   },
//   {
//     "id": 2,
//     "name": "Bunnahabhain",
//     "animal": "Terrier",
//     "breed": "Havenese",
//     "image": "https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//     "location": "Menlo Park, CA"
//   },
//   {
//     "id": 3,
//     "name": "Mockie",
//     "animal": "Dog",
//     "breed": "Alsatian",
//     "image": "https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//     "location": "San Francisco, CA"
//   }
// ]
const SearchResults = ({ pets }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium md:pt-20 dark:text-gray-300">Search Results</h1>
      <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
        {pets.map(pet => {
          return <Pet key={pet.id} name={pet.name} image={pet.images[0]} location={pet.location} breed={pet.breed} />
        })}
      </div>
    </div>
  )
}

export default SearchResults;
