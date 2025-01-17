import Hero from "../components/Hero";
import BusinessFinanceTraining from "../components/BusinessFinanceTraining";
import StudentProfiles from "../components/StudentProfiles";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import VerticalSlider from "../components/vertical";

const Home = () => {
  return (
    <main>
      <Hero />

      <BusinessFinanceTraining />
      <StudentProfiles />
      <ContactForm />
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <VerticalSlider />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
