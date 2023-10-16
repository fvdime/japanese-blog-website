import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useParams } from "react-router-dom";

const BlogPage = ({item}) => {

  // const {isLoading, error, data} = useQuery({
  //   queryKey: ['postUser'],
  //   queryFn: () => newRequest.get(`/users/${item.userId}`).then(res => {return res.data})
  // })

  const {id} = useParams()

  const {isLoading, error, data} = useQuery({
    queryKey: ['post'],
    queryFn: () => newRequest.get(`/posts/single/${id}`).then(res => {console.log(res.data)})
  })

  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl text-gray-950">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue format-invert">
            <div className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm ">
                  <div>
                    {/* {isLoading ? 'loading' : error ? 'Something went wrong' : 
                    <h1 href="#" className="text-xl font-bold text-gray-800">
                      {}
                    </h1>
                    } */}
                    <p className="text-base text-gray-500">
                      <time>Feb 8, 2022</time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-gray-950">
                {data.title}
              </h1>
            </div>
              <p>{data.desc}</p>
            {/* <section className="not-format">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold">Discussion (20)</h2>
                    </div>
                </section> */}
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
