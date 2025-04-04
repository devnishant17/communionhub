import Carousal from "./_components/Carousal";
import HomePage from "./_components/HomePage";
import Newsletter from "./_components/Newsletter";
import Appointment from "./_components/Appointment";
import ListProperty from "./_components/ListedHost";
import Mobile from "./_components/MobileApp";
import CollectionCard from "./_components/CollectionCard";
import BrowsePropertise from "./_components/BrowseEvent";
import Review from "./_components/Review";
import Testimonial from "./_components/Testimonial"
import ContactForm from "./_components/ContectForm";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      {/* <Carousal />
      <HomePage />
      <BrowsePropertise />
      <CollectionCard />
      <Mobile /> */}
      <Hero />
      <ListProperty />
      <Testimonial />
      
      <Review />
      <Newsletter />
      {/* <Appointment /> */}
      
      <ContactForm />
    </>
  );
}
