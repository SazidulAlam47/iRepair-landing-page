import Container from "@/components/custom/Container";
import macbook from "@/assets/images/macbook.jpg";
import CountNumber from "@/components/custom/CountNumber";
import { useInView, motion, animate, stagger } from "motion/react";
import { useRef, useEffect } from "react";
import { splitText } from "motion-plus";

const WhoWe = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const textContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!textContainerRef.current) return;

            textContainerRef.current.style.visibility = "visible";

            const { words } = splitText(
                textContainerRef.current.querySelector("h3")!
            );

            if (isInView) {
                animate(
                    words,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                        type: "spring",
                        duration: 3,
                        bounce: 0,
                        delay: stagger(0.05),
                    }
                );
            }
        });
    }, [isInView]);

    return (
        <section className="relative" ref={sectionRef}>
            <motion.div
                initial={{ x: -600 }}
                animate={isInView ? { x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="absolute h-full hidden lg:flex items-center"
            >
                <img src={macbook} alt="Macbook" />
            </motion.div>
            <Container
                ref={textContainerRef}
                className="grid grid-cols-1 lg:grid-cols-2 py-24 md:py-16 sm:py-12 gap-8 relative z-10"
            >
                <div className="hidden lg:block opacity-0 invisible">
                    <img src={macbook} alt="Macbook" />
                </div>
                <div className="flex flex-col justify-center text-center lg:text-left">
                    <h3 className="font-semibold text-6xl mb-6">Who we are </h3>
                    <p className="pt-4 pb-2 text-xl text-accent">
                        At <span className="font-semibold">iRepair</span>, we
                        love MacBooks as much as you do. That’s why we offer
                        fast, reliable, and affordable repair services for all
                        kinds of MacBooks. Whether you need a screen
                        replacement, a battery upgrade, or a software fix, we
                        have the skills and experience to get your MacBook back
                        to its best. We serve both individuals and businesses in{" "}
                        <span className="font-semibold">Bangladesh</span>, and
                        we guarantee your satisfaction. Don’t let a broken
                        MacBook ruin your day. Contact iRepair today and let us
                        take care of it.
                    </p>
                    <div className="flex justify-between">
                        <CountNumber
                            count={98}
                            suffix="%"
                            label="Successful repairs"
                        />
                        <CountNumber
                            count={2}
                            suffix="k+"
                            label="Successful repairs"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhoWe;
