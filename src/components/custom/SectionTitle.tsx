import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

interface SectionTitleProps {
    title: string;
    highlight: string;
    description: string;
    className?: string;
}

const SectionTitle = ({ title, highlight, description }: SectionTitleProps) => {
    const highlightedTitle = title.replace(
        new RegExp(`(${highlight})`, "i"),
        `<span class="text-primary">$1</span>`
    );

    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return;

            containerRef.current.style.visibility = "visible";

            const { words } = splitText(
                containerRef.current.querySelector("p")!
            );

            if (isInView) {
                animate(
                    words,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                        type: "spring",
                        duration: 0.4,
                        bounce: 0,
                        delay: stagger(0.05),
                    }
                );
            }
        });
    }, [isInView]);

    return (
        <div className="space-y-4" ref={containerRef}>
            <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-5xl lg:text-6xl font-semibold text-center"
                dangerouslySetInnerHTML={{ __html: highlightedTitle }}
            />
            <p className="w-3/5 mx-auto text-center text-lg text-accent">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;
