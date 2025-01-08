
import Hero from '../components/Hero'
import BusinessFinanceTraining from '../components/BusinessFinanceTraining'
import StudentProfiles from '../components/StudentProfiles'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import FetchSwaggerData from '../components/FetchData'

const Home = () => {
  return (
    <main >
        <Hero/>
        <BusinessFinanceTraining/>
        <StudentProfiles/>
        <ContactForm/>
        <FetchSwaggerData/>
        <Footer />
        
    </main>
  )
}

export default Home