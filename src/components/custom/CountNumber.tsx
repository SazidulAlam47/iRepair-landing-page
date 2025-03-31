import {
    animate,
    AnimationPlaybackControls,
    motion,
    useInView,
    useMotionValue,
    useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

type TCountNumberProps = {
    count: number;
    label: string;
    suffix?: string;
};

const CountNumber = ({
    count: finalCount,
    suffix,
    label,
}: TCountNumberProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    useEffect(() => {
        let controls: AnimationPlaybackControls | undefined;
        if (isInView) controls = animate(count, finalCount, { duration: 5 });
        return () => {
            if (controls) controls.stop();
        };
    }, [finalCount, count, isInView]);
    return (
        <div ref={ref}>
            <h5 className="text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                <motion.span>{rounded}</motion.span>
                {suffix && suffix}
            </h5>
            <p className="font-semibold text-center">{label}</p>
        </div>
    );
};

export default CountNumber;
