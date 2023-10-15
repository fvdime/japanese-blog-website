import BlogPage from "../components/BlogPage"
import Navbar from "../components/Navbar"
import SecondaryFooter from "../components/SecondaryFooter"

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-screen-md mx-auto p-4 lg:p-0">
        <BlogPage/>
      </div>
      <SecondaryFooter/>
    </div>
  )
}

export default Blog