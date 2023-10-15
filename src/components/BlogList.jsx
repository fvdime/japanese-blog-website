import SingleBlog from "./SingleBlog"

const BlogList = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
      <SingleBlog/>
      <SingleBlog/>
      <SingleBlog/>
      <SingleBlog/>
      <SingleBlog/>
      </div>
    </div>
  )
}

export default BlogList