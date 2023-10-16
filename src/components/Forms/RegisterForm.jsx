import { useState } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

  const [error, setError] = useState(null)
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  })

  const router = useNavigate()

  const handleChange = (e) => {
    setUser((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await newRequest.post("auth/register", 
      {...user})

      localStorage.setItem("currentUser", JSON.stringify(response.data))

      router("/login")
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div>
      <div className="w-full max-w-sm p-4 border border-slate-100 rounded-lg shadow py-8 px-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-bold text-white text-center">
            サインアップ
          </h5>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-white"
            >
              ユーザー名
            </label>
            <input
              onChange={handleChange}
              name="username"
              className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              placeholder="ユーザー名"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              メール
            </label>
            <input
              onChange={handleChange}
              name="email"
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
              onChange={handleChange}
              name="password"
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
            登録する
          </button>
          {error && error}
          <div className="text-sm font-medium text-gray-300">
            アカウントを持ちですか？{" "}
            <a href="/login" className="hover:underline text-blue-500">
              アカウントにログイン
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
