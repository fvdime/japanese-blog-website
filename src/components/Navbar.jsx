import Logo from "./Logo";

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="mb-8">
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Logo />
          <div className="flex flex-row items-center justify-center gap-2 md:gap-8">
            <a href="/" className="flex items-center">
              <span className="self-center text-sm font-semibold whitespace-nowrap border-b border-slate-900">
                ホーム
              </span>
            </a>
            <a href="/" className="flex items-center">
              <span className="self-center text-sm font-semibold whitespace-nowrap border-b border-slate-900">
                巻絡
              </span>
            </a>
            <a href="/" className="flex items-center">
              <span className="self-center text-sm font-semibold whitespace-nowrap border-b border-slate-900">
                サポート
              </span>
            </a>
          </div>
          <div>
            {/* <a
              href="/login"
              className="py-2 md:py-2.5 px-8 md:px-12 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
            >
              ジョイン
            </a> */}
            {!currentUser && (
              <div>
                <a href="/register">
                  <button
                    type="button"
                    className="py-1 md:py-2 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
                  >
                    登録する
                  </button>
                </a>
                <a href="/login">
                  <button
                    type="button"
                    className="py-1 md:py-2 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
                  >
                    ログイン
                  </button>
                </a>
              </div>
            )}
            {currentUser && (
              <div>
                <a
                  href="/write"
                  className="py-1 md:py-2 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
                >
                  書こう
                </a>
                <a
                  href="/profile"
                  className="py-1 md:py-2 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
                >
                  プロフィール
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
