type TCountNumberProps = {
    count: string;
    label: string;
};

const CountNumber = ({ count, label }: TCountNumberProps) => {
    return (
        <div>
            <h5 className="text-primary text-6xl lg:text-9xl">{count}</h5>
            <p className="font-semibold text-center">{label}</p>
        </div>
    );
};

export default CountNumber;
