const LoginForm = () => {
  return (
    <div>
      <div className="w-full max-w-sm p-4 border border-slate- rounded-lg shadow py-8 px-12">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-bold text-white text-center">
          サインイン
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              メール
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              パスワード
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            ログイン
          </button>
          <div className="text-sm font-medium text-gray-300">
            登録されていない？{" "}
            {/* 未登録 */}
            <a
              href="/register"
              className="hover:underline text-blue-500"
            >
              アカウントを作成する
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
