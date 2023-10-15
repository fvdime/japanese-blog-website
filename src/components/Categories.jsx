const Categories = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col justify-center items-center">
        <div className="pb-4 flex flex-row items-center justify-between w-full">
          <div className="border border-b border-slate-600 w-full"></div>
          <h1 className="text-lg font-semibold pl-4">トピック</h1>
          <div className="border border-b border-slate-600 w-full"></div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a href="/register">
            <button
              type="button"
              className="py-1 md:py-2.5 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold border border-slate-900 text-gray-100 focus:outline-none bg-slate-900 rounded-full hover:text-slate-900 hover:bg-slate-100  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              ソフトウェア
            </button>
          </a>
          <a href="/register">
            <button
              type="button"
              className="py-1 md:py-2.5 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold border border-slate-900 text-gray-100 focus:outline-none bg-slate-900 rounded-full hover:text-slate-900 hover:bg-slate-100  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              開発
            </button>
          </a>
          <a href="/register">
            <button
              type="button"
              className="py-1 md:py-2.5 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold border border-slate-900 text-gray-100 focus:outline-none bg-slate-900 rounded-full hover:text-slate-900 hover:bg-slate-100  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              開発
            </button>
          </a>
          <a href="/register">
            <button
              type="button"
              className="py-1 md:py-2.5 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold border border-slate-900 text-gray-100 focus:outline-none bg-slate-900 rounded-full hover:text-slate-900 hover:bg-slate-100  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              開発
            </button>
          </a>
          <a href="/register">
            <button
              type="button"
              className="py-1 md:py-2.5 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold border border-slate-900 text-gray-100 focus:outline-none bg-slate-900 rounded-full hover:text-slate-900 hover:bg-slate-100  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              開発
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
