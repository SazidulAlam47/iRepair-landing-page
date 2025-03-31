import Container from "@/components/custom/Container";
import SectionTitle from "@/components/custom/SectionTitle";
import ServiceCard from "@/components/custom/ServiceCard";
import img1 from "@/assets/images/trackpad.png";
import img2 from "@/assets/images/harddrivecable.png";
import img3 from "@/assets/images/chip.jpg";

const Services = () => {
    return (
        <Container asChild>
            <section className="py-20">
                <SectionTitle
                    highlight="Services"
                    title="Services that we provide."
                    description="We provide various computer repair services and solutions for our new and regular customers. Feel free to find out more below."
                />
                <div className="mt-8 grid grid-cols-5 gap-4">
                    <ServiceCard
                        heading="Battery Replacement"
                        text="Get back to 100% battery health. With 6 month replacement warranty."
                        image={img1}
                        className="col-span-5"
                    />
                    <ServiceCard
                        heading="Chip Replacement"
                        text="There is no need to replace the motherboard for a tiny little dead chipset."
                        className="col-span-2"
                        background={img3}
                    />
                    <ServiceCard
                        heading="Data Recovery"
                        text="Lost your old memories ? Lost your project? Don’t worry, We will recover it for you"
                        className="col-span-3"
                    />
                    <ServiceCard
                        heading="Storage Replacement"
                        text="Get rid of your slow HDD, upgrade to super fast SSD with ease"
                        image={img2}
                        className="col-span-5"
                    />
                </div>
            </section>
        </Container>
    );
};

export default Services;
