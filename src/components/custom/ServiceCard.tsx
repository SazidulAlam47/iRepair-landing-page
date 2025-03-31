import { cn } from "@/lib/utils";

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
    return (
        <div
            className={cn(
                "bg-primary-foreground h-80 flex justify-between rounded-xl overflow-hidden",
                className,
                { "bg-cover relative": background }
            )}
            style={background ? { backgroundImage: `url(${background})` } : {}}
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
                    <img src={image} alt="macbook" className="h-full w-2xl" />
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
