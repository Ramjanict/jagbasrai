import AboutHero from "@/components/about/AboutHero";
import AICapabilities from "@/components/about/AICapabilities";
import ScrollStack from "@/components/about/ScrollStack/ScrollStack";
import CommonSpace from "@/components/common/space/CommonSpace";
import CommonWrapper from "@/components/common/space/CommonWrapper";
import heroImg from "../../../public/images/aboutHero.jpg";
const page = () => {
  return (
    <>
      <AboutHero
        title="About Us"
        subtitle="GoAutomateMD is transforming healthcare through intelligent automation and seamless system integration. Powered by agentic AI, our adaptable solutions are tailored to each organization’s unique needs, efficiency, optimizing workflows, and empowering care teams to focus on what matters most: delivering exceptional patient care."
        image={heroImg}
      />
      <CommonSpace>
        <CommonWrapper>
          <AICapabilities />
        </CommonWrapper>
      </CommonSpace>
      <ScrollStack />
    </>
  );
};

export default page;
