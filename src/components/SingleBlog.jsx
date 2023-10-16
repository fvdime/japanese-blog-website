import { Link } from "react-router-dom";

const SingleBlog = ({ item }) => {
  return (
    <div>
      <Link
        to={`/blog/${item._id}`}
        className="min-w-md flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
            {item.title}
          </h5>
          <p className="mb-1 font-normal text-slate-600 hidden md:flex break-words">
          {item.about}
          </p>
          <div className="flex flex-row justify-between items-center w-full md:mt-2">
          <p className="font-semibold text-slate-700 text-sm">
          {item.categories}
          </p>
          <p className="font-normal text-slate-600 hidden md:flex">
            11.07.2023
          </p>
          
          </div>
        </div>
        <img
          className="object-cover w-full h-52 md:h-auto md:w-48 rounded-s-none rounded-e-lg"
          src="/flower.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default SingleBlog;
