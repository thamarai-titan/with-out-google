
import Nav from "@/Components/Layout/Nav"
import Header from "@/Components/Layout/Header"
import AlternativeToolsData from "@/public/content.json"
import CategoryCard from "@/Components/ui/CategoryCard"
import Footer from "@/Components/Layout/Footer"

const Home = () => {
  return <>
    <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    <div className='max-w-6xl mx-auto w-full z-10 p-4 md:p-0'>

      <Nav />
      <Header />
      <div className="max-w-3xl w-full">
        {Object.entries(AlternativeToolsData).map(([googleProduct, alternatives]) => (
          <CategoryCard key={googleProduct} googleProduct={googleProduct} alternatives={alternatives} />
        ))}
      </div>
      <Footer />
    </div>
  </>
}

export default Home
