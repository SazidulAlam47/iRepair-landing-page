import { cn } from "@/lib/utils";
import { motion, useSpring, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type TServiceCardProps = {
    heading: string;
    text: string;
    image?: string;
    className?: string;
    background?: string;
};

const ServiceCard = ({
    heading,
    text,
    image,
    className,
    background,
}: TServiceCardProps) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const scaleSpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scale = useTransform(scaleSpring, [0, 1], [0.85, 1]);
    const opacity = useTransform(scaleSpring, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            className={cn(
                "bg-primary-foreground h-80 flex justify-between rounded-xl overflow-hidden",
                className,
                { "bg-cover relative": background }
            )}
            style={{
                scale,
                opacity,
                ...(background
                    ? { backgroundImage: `url(${background})` }
                    : {}),
            }}
        >
            {background && (
                <div className="bg-white absolute inset-0 opacity-80 z-10" />
            )}
            <div className="flex flex-col justify-between px-8 py-7 z-20">
                <h6 className="font-semibold text-xl">{heading}</h6>
                <h3 className="text-4xl">{text}</h3>
                <div />
            </div>
            {image && (
                <div>
                    <img
                        src={image}
                        alt="service"
                        className="h-full w-2xl object-cover object-left"
                    />
                </div>
            )}
        </motion.div>
    );
};

export default ServiceCard;
