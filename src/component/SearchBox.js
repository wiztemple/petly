const SearchBox = () => {
  return (
    <div className="bg-white shadow-sm md:w-780px rounded px-6 py-4">
      <div className="md:flex items-center justify-between rounded-full bg-gray1">
        <div className="flex">
          <div className="">
            <select>
              <option>okay</option>
            </select>
          </div>
          <div className="">
            <select>
              <option>okay</option>
            </select>
          </div>
          <div className="">
            <select>
              <option>okay</option>
            </select>
          </div>
        </div>
        <button type="button" className="bg-appblue w-20 h-16 rounded-full flex justify-center items-center">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2647 20.53C4.57963 20.53 0 15.9502 0 10.265C0 4.57977 4.57963 0 10.2647 0C15.9497 0 20.5294 4.57977 20.5294 10.265C20.5294 15.9502 15.9497 20.53 10.2647 20.53ZM10.2647 1.57923C5.44818 1.57923 1.57918 5.44835 1.57918 10.265C1.57918 15.0817 5.44818 18.9508 10.2647 18.9508C15.0812 18.9508 18.9502 15.0817 18.9502 10.265C18.9502 5.44835 15.0812 1.57923 10.2647 1.57923Z" fill="white" />
            <path d="M17.9095 16.7927L25 23.8835L23.8835 25L16.793 17.9092L17.9095 16.7927Z" fill="white" />
          </svg>
        </button>
      </div>
      <p>You may be looking for</p>
    </div>
  )
}

export default SearchBox;
