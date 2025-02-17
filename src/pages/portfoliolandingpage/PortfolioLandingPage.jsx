import AboutMeComponent from "../../components/aboutme/AboutMeComponent"
import Certifications from "../../components/certiication/Certification"
import Contact from "../../components/contact/Contact"
import ExperienceComponent from "../../components/experience/ExperienceComponent"
import PortfolioHeader from "../../components/portflioHeader/PortfolioHeader"
import PortfolioHerosection from "../../components/portfolioHerosections/PortfolioHerosection"
import MySideProject from "../../components/showWorks/MySideProject"
import Skills from "../../components/skills/Skills"
const PortfolioLandingPage = () => {
  return (
    <div className="w-full">
     <PortfolioHeader/>
     <PortfolioHerosection/>
     <AboutMeComponent/>
     <ExperienceComponent/>
     <MySideProject/>
     <Certifications/>
     <Skills/>
     <Contact/>
    </div>
  )
}

export default PortfolioLandingPage
