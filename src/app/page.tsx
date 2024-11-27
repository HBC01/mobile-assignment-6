
import Nava from "../components/Nava";
import Blog from "../components/Blog";
import Faculty from "../components/Faculty";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
export default  function Home(){
  return(
    <div className="body ">
    
    <Nava/>
    <Header/>
   <Logo/>
    <Blog  />
    
    <Layout />
     <Faculty  />
    <Team />
    <Testimonial />
    <Footer  />
    
    
    </div>
    )
  
}