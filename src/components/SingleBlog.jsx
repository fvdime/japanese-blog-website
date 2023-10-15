const SingleBlog = () => {
  return (
    <div>
      <a
        href="#"
        className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
            エーゲ ～過ぎ去りし風と共に～
          </h5>
          <p className="mb-1 font-normal text-slate-600">
          琥珀の想い誘う蒼い風部屋に響く映写機の回る音古いフィルムの中だけで微笑ってる君指でそっと壁際の君をなぞる
          </p>
          <div className="flex flex-row justify-between items-center w-full md:mt-2">
          <p className="font-semibold text-slate-900 text-sm">
          マリスミゼル
          </p>
          <p className="font-normal text-slate-600">
            11.07.2023
          </p>
          
          </div>
        </div>
        <img
          className="object-cover w-full h-52 md:h-auto md:w-48 rounded-s-none rounded-e-lg"
          src="/flower.jpg"
          alt=""
        />
      </a>
    </div>
  );
};

export default SingleBlog;
