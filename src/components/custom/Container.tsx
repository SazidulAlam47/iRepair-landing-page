import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
    asChild?: boolean;
    children: ReactNode;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Container = ({
    asChild,
    children,
    className,
    ...props
}: ContainerProps) => {
    const Component = asChild ? Slot : "div";

    return (
        <Component
            className={cn("container mx-auto px-3 md:px-6", className)}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Container;
