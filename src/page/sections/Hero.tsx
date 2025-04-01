import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";
import { motion } from "motion/react";

const intro = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
            delayChildren: 0.4,
        },
    },
};

const introChildren = {
    hidden: {
        opacity: 0,
        y: -500,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const laptop = {
    initial: { y: 0, rotate: 0, scale: 5 },
    animate: {
        y: 20,
        rotate: -30,
        scale: 1,
        transition: {
            duration: 0.7,
            delay: 0,
            y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    },
};

const Hero = () => {
    return (
        <Container asChild>
            <section className="grid grid-cols-1 lg:grid-cols-2 lg:h-[calc(100vh-40px)] py-36">
                <motion.div
                    className="flex flex-col justify-center gap-1"
                    variants={intro}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-5xl lg:text-8xl font-bold text-secondary"
                        variants={introChildren}
                    >
                        Don't worry.
                    </motion.h1>
                    <motion.h1
                        className="text-5xl lg:text-8xl font-bold text-muted"
                        variants={introChildren}
                    >
                        We'll fix it.
                    </motion.h1>
                    <motion.p
                        className="pt-4 pb-2 text-base lg:text-xl text-accent max-w-[50ch]"
                        variants={introChildren}
                    >
                        Welcome to{" "}
                        <span className="font-semibold">iRepair</span>, your
                        one-stop place for all kinds of{" "}
                        <span className="font-semibold">Macbook repairs</span>{" "}
                        and diagnostics.
                    </motion.p>
                    <motion.div variants={introChildren}>
                        <Button className="w-36">Book a service</Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="text-center mx-10 mt-10"
                    variants={laptop}
                    initial="initial"
                    animate="animate"
                >
                    <img
                        src={macbook}
                        alt="Macbook"
                        className="w-sm md:w-md inline-block drop-shadow-[-27px_40px_23.2px_rgba(0,0,0,0.6)] object-contain"
                    />
                </motion.div>
            </section>
        </Container>
    );
};

export default Hero;
