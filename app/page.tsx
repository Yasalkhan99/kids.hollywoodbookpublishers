import Header from "./components/header";
import HeroSection from "./components/hero-section";
import HeroBottomLogos from "./components/hero-bottom-logos";
import AuthorTrustUs from "./components/author-trust-us";
import PublishYourChildrenBook from "./components/publish-your-children-book";
import SuccessStories from "./components/success-stories";
import PublicService from "./components/publish-service";
import PublishingSolution from "./components/publishing-solution";
import Portfolio from "./components/portfolio";
import Questions from "./components/questions";
import HireUs from "./components/hire-us";
import BookYourself from "./components/book-yourself";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroBottomLogos text={true} />
      <PublicService />
      <HireUs />
      <AuthorTrustUs />
      <Portfolio />
      <PublishYourChildrenBook />
      <PublishingSolution />
      <SuccessStories />
      <Questions />
      <BookYourself />
      <HeroBottomLogos text={false} />
      <Footer />
    </>
  );
}
