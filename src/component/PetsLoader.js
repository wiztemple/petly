const PetsLoader = () => {
  return (
    <div className="animate-pulse md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
      <div className="bg-white dark:bg-kiwi border border-graywhite dark:border-kiwi2 px-5 py-5 rounded-xl">
        <div
          className="bg-loadergray dark:bg-kiwi2 w-full h-48 rounded-xl" />
        <div className="flex justify-between items-center py-3">
          <span className="block">
            <div className="w-32 h-3 rounded-full bg-loadergray dark:bg-kiwi2" />
            <span className="w-16 h-2 bg-loadergray dark:bg-kiwi2 rounded-full block mt-2" />
          </span>
          <span className="h-10 w-10 rounded-full bg-loadergray block dark:bg-kiwi2"></span>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="bg-loadergray dark:bg-kiwi2 w-28 h-10 rounded-full" />
          <span className="flex items-center space-x-3">
            <span className="block bg-loadergray dark:bg-kiwi2 h-6 w-6 rounded-full" />
            <span className="block w-20 h-4 rounded-full bg-loadergray dark:bg-kiwi2" />
          </span>
        </div>
      </div>
      <div className="bg-white dark:bg-kiwi border border-graywhite dark:border-kiwi2 px-5 py-5 rounded-xl">
        <div
          className="bg-loadergray dark:bg-kiwi2 w-full h-48 rounded-xl" />
        <div className="flex justify-between items-center py-3">
          <span className="block">
            <div className="w-32 h-3 rounded-full bg-loadergray dark:bg-kiwi2" />
            <span className="w-16 h-2 bg-loadergray dark:bg-kiwi2 rounded-full block mt-2" />
          </span>
          <span className="h-10 w-10 rounded-full bg-loadergray dark:bg-kiwi2 block"></span>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="bg-loadergray dark:bg-kiwi2 w-28 h-10 rounded-full" />
          <span className="flex items-center space-x-3">
            <span className="block bg-loadergray dark:bg-kiwi2 h-6 w-6 rounded-full" />
            <span className="block w-20 h-4 rounded-full bg-loadergray dark:bg-kiwi2" />
          </span>
        </div>
      </div>
      <div className="bg-white dark:bg-kiwi border border-graywhite dark:border-kiwi2 px-5 py-5 rounded-xl">
        <div
          className="bg-loadergray dark:bg-kiwi2 w-full h-48 rounded-xl" />
        <div className="flex justify-between items-center py-3">
          <span className="block">
            <div className="w-32 h-3 rounded-full bg-loadergray dark:bg-kiwi2" />
            <span className="w-16 h-2 bg-loadergray dark:bg-kiwi2 rounded-full block mt-2" />
          </span>
          <span className="h-10 w-10 rounded-full bg-loadergray dark:bg-kiwi2 block"></span>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="bg-loadergray dark:bg-kiwi2 w-28 h-10 rounded-full" />
          <span className="flex items-center space-x-3">
            <span className="block bg-loadergray dark:bg-kiwi2 h-6 w-6 rounded-full" />
            <span className="block w-20 h-4 rounded-full bg-loadergray dark:bg-kiwi2" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default PetsLoader;
