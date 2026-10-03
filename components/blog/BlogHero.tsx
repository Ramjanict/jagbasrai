import heroImg from "@/public/images/blogHero.jpg";
import AboutHero from "../about/AboutHero";

const BlogHero = () => {
  return (
    <div>
      <AboutHero
        title="News"
        subtitle="Stay current with GoAutomateMD latest news, insights, and industry trends. Explore our newsroom for company announcements and thought leadership."
        image={heroImg}
        gradient="linear-gradient(191deg, rgba(0, 0, 0, 0.36) 59.78%, rgba(0, 0, 0, 0.40) 71.63%), linear-gradient(0deg, rgba(122, 32, 162, 0.20) 0%, rgba(122, 32, 162, 0.20) 100%)"
      />
    </div>
  );
};

export default BlogHero;
