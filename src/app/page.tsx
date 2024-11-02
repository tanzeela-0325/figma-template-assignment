import Header from "@/components/header";
import HeroSection from "@/components/herosection";
import About from "@/components/about";
import MainFocus from "@/components/main-focus";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div >
      <Header/>
      <br />
      <HeroSection/>
      <br /> <br />
      <About/>
      <br /> <br />
      <MainFocus/>
      <br /> <br />
      <Projects/>
      <br /> <br />
      <Contact/>
      <br /> <br />
      <Footer/>
    </div>
  );
}
