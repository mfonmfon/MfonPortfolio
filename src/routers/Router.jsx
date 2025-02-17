import Contact from "../components/contact/Contact";
import About from "../pages/aboutpage/About";
import ContactMe from "../pages/contactme/ContactMe";
import PortfolioLandingPage from "../pages/portfoliolandingpage/PortfolioLandingPage";

const MFON_MFON_PORTFOLIO_ROUTES = [
  {
    path: '',
    element: <PortfolioLandingPage/>,
    children:[
      {
        path: '/',
        element: <PortfolioLandingPage/>
      }
    ]
  },
  {
    path: '/about',
    element: <About/>
  },
  
  {
    path: '/contact',
    element: <ContactMe/>
  },
  {
    path: '/letstalk',
    element: <Contact/>
  },
]
export default MFON_MFON_PORTFOLIO_ROUTES;