"use client"

// import axios from "axios";
import { useCallback, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import SecondaryFooter from "../components/SecondaryFooter";
import Navbar from "../components/Navbar";


const Write = () => {

  const [value, setValue] = useState('')
  // const [body, setBody] = useState("");
  // const [title, setTitle] = useState("");
  // // const [isLoading, setIsLoading] = useState(false)

  // const ReactQuill = useMemo(
  //   () => (() => import("react-quill"), { ssr: false }),
  //   []
  // );

  // const handleSubmit = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
      
  //     await axios.post('/api/post', {
  //       title, body
  //     });

  //     setIsLoading(false)

  //     toast.success('Post created!');
  //   } catch (error) {

  //     toast.error('Something went wrong');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [title, body])

  
  return (
    <div className="h-screen w-full">
      <Navbar/>
      <div className="max-w-screen-md mx-auto p-4 lg:p-0">
      <div className="p-8 flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl text-gray-800">クリエート</h1>
        <button 
        // onClick={handleSubmit}
        className="border border-slate-500 py-1 px-8 rounded-lg text-slate-500 -semibold hover:text-white hover:bg-slate-500 transition-all ease-in duration-300">
          表す
        </button>
      </div>
      <input
        type="text"
        placeholder="タイトル"
        // value={title}
        // onChange={(e) => setTitle(e.target.value)}
        className="w-full p-8 border-none outline-none text-2xl bg-transparent text-slate-900"
      />
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="あなたの作品をしぇあしてください。"
        className="placeholder:text-4xl placeholder:text-slate-950 text-slate-950 text-2xl"
      />
      </div>
      <div className="absolute bottom-0 w-full">
        <SecondaryFooter/>
      </div>
    </div>
  )
}

export default Write