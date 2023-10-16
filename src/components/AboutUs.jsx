
const AboutUs = () => {
  return (
    <div className="bg-white w-full my-4 border border-slate-500 rounded-lg">
      <div className="w-full flex flex-col justify-between items-end">
        <div className="flex flex-row">
          <img src="/flower2.jpg" alt="" className="w-1/3 rounded-tl-lg"/>
          <div className="bg-slate-500 flex-1 rounded-tr-md"></div>
        </div>
        <div className="w-full p-2">
          <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
          何か特にお考えですか。
          </p>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-end">
          ここに書いてください。
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs