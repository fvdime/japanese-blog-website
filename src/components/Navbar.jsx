import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="mb-8">
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Logo/>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-8">
          <a href="/" className="flex items-center">
            <span className="self-center text-sm font-semibold whitespace-nowrap">
              ホーム
            </span>
          </a>
          <a href="/" className="flex items-center">
            <span className="self-center text-sm font-semibold whitespace-nowrap">
              巻絡
            </span>
          </a>
          <a href="/" className="flex items-center">
            <span className="self-center text-sm font-semibold whitespace-nowrap">
              サポート
            </span>
          </a>
          </div>
          <div>
            <a
              href="/login"
              className="py-2 md:py-2.5 px-8 md:px-12 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              ジョイン
            </a>
            {/* auth */}
            {/* <a
              href="/login"
              className="py-2 md:py-2.5 px-8 md:px-12 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              書こう
            </a>
            <a
              href="/login"
              className="py-2 md:py-2.5 px-8 md:px-12 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              ログアウト
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
