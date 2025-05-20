
import AboutHome from "@/components/components/about/home";
import SnakeGame from "@/components/components/about/SnakeGame";
import FAQs from "@/components/components/about/Faq";
import Footer from "@/components/UI/layouts/footer";
import Certifications from "@/components/UI/contents/Certificatins";

const AboutPage = () => {

    return (
        <>
            <AboutHome />
            <Certifications />
            <SnakeGame />
            <FAQs />
            <Footer />
        </>
    )
}

export default AboutPage;