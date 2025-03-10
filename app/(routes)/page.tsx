import Carousal from "./_components/Carousal";
import HomePage from "./_components/HomePage";
import Newsletter from "./_components/Newsletter";
import Discover from "./_components/Discover";
import ListProperty from "./_components/ListedHost";
import PropertyImages from "./_components/PropertyImages";
import Mobile from "./_components/MobileApp";
import CollectionCard from "./_components/CollectionCard";
import BrowsePropertise from "./_components/BrowseEvent";

export default function Home() {
  return (
    <>
      <Carousal />
      <HomePage />
      <BrowsePropertise />
      <CollectionCard />
      <Mobile />
      <PropertyImages />
      <ListProperty />
      <Discover />
      <Newsletter />
    </>
  );
}
