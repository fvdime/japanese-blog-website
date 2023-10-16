// import { useState, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import SingleBlog from "./SingleBlog"
import newRequest from "../utils/newRequest"
import { useLocation } from "react-router-dom"
import Categories from "./Categories"

const BlogList = () => {

  const { search } = useLocation()

  const {isLoading, error, data, refetch} = useQuery({
    queryKey: ['postData'],
    queryFn: () => newRequest.get(`/posts/${search}`).then(res => {return res.data})
  })

  const handleApply = () => {
    refetch()
  }

  return (
    <div>
      <Categories onClick={handleApply}/>
      <div className="flex flex-col justify-center items-center gap-y-4">
        {isLoading ? "loading" : error ? "Something went wrong" : data.map((item) => <SingleBlog key={item._id} item={item}/>)}
      </div>
    </div>
  )
}

export default BlogList