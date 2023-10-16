import Logo from "./Logo";

const HeroBanner = () => {

  // const handleLogout = async () => {
  //   try {
  //     await newRequest.post("/auth/logout")
  //     localStorage.setItem("currentUser", null)
  //     router("/")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="h-full w-full">
      <section className="bg-center bg-repeat bg-[url('flower2.jpg')] bg-gray-300 bg-blend-multiply">
        <nav className="w-full flex justify-between items-center py-2 px-4 md:px-8">
          <Logo />
          <div>
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
        </nav>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
          <h1 className="text-3xl font-bold tracking-tight leading-none text-slate-950 md:text-4xl lg:text-5xl">
            みんなのためのプラットフォーム
          </h1>
          <p className="text-sm font-bold text-gray-800 lg:text-lg pt-4 sm:px-16 lg:px-48">
            本当は、ユーザのみなさんからヒントを得て作成された書くますプラットフォームです。オープンソース、フリー、ブログの書くますを行うことができます。
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
