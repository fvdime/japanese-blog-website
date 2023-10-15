
const SecondaryFooter = () => {
  return (
    <div>
      <footer>
        <div className="w-full mb-4">
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <div className="sm:flex sm:items-center sm:justify-between px-4 lg:px-16">
          <span className=" text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline">
              本当™
            </a>
            . 版権所有
          </span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-semibold text-gray-700 sm:mb-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  ついて
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  プライバシー・ポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ソースコード
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </footer>
    </div>
  )
}

export default SecondaryFooter