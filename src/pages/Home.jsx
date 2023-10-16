import HeroBanner from '../components/HeroBanner'
// import Categories from '../components/Categories'
import BlogList from '../components/BLogList'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'


const Home = () => {
  return (
    <>
      <HeroBanner/>
      <div className="mx-auto max-w-screen-md px-4 md:p-0">
        {/* <Categories/> */}
        <BlogList/>
        <AboutUs/>
        <Footer/>
      </div>
    </>
  )
}

export default Home