import { useQuery } from "@tanstack/react-query"
import BlogPage from "../components/BlogPage"
import Navbar from "../components/Navbar"
import SecondaryFooter from "../components/SecondaryFooter"
import newRequest from "../utils/newRequest"
import { useParams } from "react-router-dom"

const Blog = () => {

 

  return (
    <div>
      <Navbar/>
      <div className="max-w-screen-md mx-auto p-4 lg:p-0">
      {/* {isLoading ? "loading" : error ? "Something went wrong" : data?.map((item) => <BlogPage key={item.id} item={item}/>)}     */}
      <BlogPage/>
      </div>
      <SecondaryFooter/>
    </div>
  )
}

export default Blog