import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";

const Hero = () => {
    return (
        <Container asChild>
            <section className="grid grid-cols-1 lg:grid-cols-2 py-36">
                <div className="flex flex-col justify-center gap-1">
                    <h1 className="text-5xl lg:text-8xl font-bold text-secondary">
                        Don't worry.
                    </h1>
                    <h1 className="text-5xl lg:text-8xl font-bold text-muted">
                        We'll fix it.
                    </h1>
                    <p className="pt-4 pb-2 text-base lg:text-xl text-accent">
                        Welcome to{" "}
                        <span className="font-semibold">iRepair</span>, your
                        one-stop place for all kinds of{" "}
                        <span className="font-semibold">Macbook repairs</span>{" "}
                        and diagnostics.
                    </p>
                    <Button className="w-36">Book a service</Button>
                </div>
                <div className="text-center mx-10 mt-10">
                    <img
                        src={macbook}
                        alt="Macbook"
                        className="-rotate-[35deg] w-sm md:w-md inline-block drop-shadow-[-27px_40px_23.2px_rgba(0,0,0,0.6)]"
                    />
                </div>
            </section>
        </Container>
    );
};

export default Hero;
