
import Hero from '../components/Hero'
import BusinessFinanceTraining from '../components/BusinessFinanceTraining'
import StudentProfiles from '../components/StudentProfiles'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <main >
        <Hero/>
        <BusinessFinanceTraining/>
        <StudentProfiles/>
        <ContactForm/>
       
        <Footer />
        
    </main>
  )
}

export default Home