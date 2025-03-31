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

    return (
        <div className="space-y-4">
            <h3
                className="text-6xl font-semibold text-center"
                dangerouslySetInnerHTML={{ __html: highlightedTitle }}
            />
            <p className="w-3/5 mx-auto text-center text-lg text-accent">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;
