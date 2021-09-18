import Navbar from '../component/Navbar'
import SearchBox from '../component/SearchBox';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="md:h-770px md:flex md:px-16 px-5 md:pt-40 bg-appblue bg-opacity-5">
        <div className="md:w-1/2 relative">
          <div className="md:pt-16">
            <span className="text-appblue text-sm font-medium">FIND SPECIAL PETS</span>
            <h1 className="text-5xl font-semibold text-gray6 pt-2 leading-tight">
              Think you Love Pets?
              <br />
              <span className="text-appred">Adopt One.</span>
            </h1>
            <p className="text-gray6 pt-2">
              Pet Adoption is quickly becoming the preferred way to find a new dog,
              puppy, cat or kitten.
            </p>
          </div>
          <div className="absolute">
            <SearchBox />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div>
            <div className="flex -space-x-1">
              <img
                className="h-215px w-227px object-cover rounded-tl-full"
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Cat"
              />
              <img
                className="h-215px w-227px object-cover"
                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Dog"
              />
            </div>
            <div className="flex -space-x-1">
              <img
                className="h-215px w-227px object-cover"
                src="https://images.unsplash.com/photo-1548439739-0cf616cef1cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Dog"
              />
              <img
                className="h-215px w-227px object-cover rounded-br-full"
                src="https://images.unsplash.com/photo-1597926661974-69a26ffa0f08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJpcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Bird"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;