const PetDetailsLoader = () => {
  return (
    <div>
      <div className="flex justify-between items-center md:py-10 px-5">
        <div className="flex space-x-4 items-center">
          <span className="flex justify-center items-center md:w-20 md:h-20 w-12 h-12 bg-petnamegray dark:bg-kiwi2 rounded-full">
            <span className="block  font-semibold h-12 w-12 rounded-full bg-loadergray2" />
          </span>
          <span className="block">
            <span className="block w-36 h-7 rounded-full bg-loadergray2 dark:bg-kiwi2" />
            <span className="block w-20 h-4 mt-2 rounded-full bg-loadergray2 dark:bg-kiwi2" />
          </span>
        </div>
        <span className="block h-12 w-12 rounded-full bg-loadergray2" />
      </div>
      <div className="bg-gray1 dark:bg-kiwi2 px-8 py-8 relative rounded-lg mt-3">
        <span className="block w-36 h-5 rounded-full bg-loadergray2 dark:bg-kiwi2" />
        <div className="h-247px w-full bg-loadergray2 rounded mb-16 mt-8" />
        <div className="flex justify-between space-x-5">
          <div className="w-full h-97px bg-loadergray2 rounded-lg" />
          <div className="w-full h-97px bg-loadergray2 rounded-lg" />
          <div className="w-full h-97px bg-loadergray2 rounded-lg" />
          <div className="w-full h-97px bg-loadergray2 rounded-lg" />
        </div>
        <div className="bg-white dark:bg-kiwi shadow-sm rounded p-5 mt-8">
          <span className="block w-36 h-5 rounded-full bg-loadergray2 dark:bg-kiwi2" />
          <span className="block w-full h-2 rounded-full bg-loadergray2 dark:bg-kiwi2 mt-4" />
          <span className="block w-85percent h-2 rounded-full bg-loadergray2 dark:bg-kiwi2 mt-2" />
          <span className="block w-85percent h-2 rounded-full bg-loadergray2 dark:bg-kiwi2 mt-2" />
          <span className="block w-44 h-10 rounded mt-5 bg-loadergray2 dark:bg-kiwi2" />
        </div>
        <span className="block w-40 h-12 rounded-full bg-loadergray2 dark:bg-kiwi2 mt-5" />
      </div>
    </div>
  )
}

export default PetDetailsLoader;
