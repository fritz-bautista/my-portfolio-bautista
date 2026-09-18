interface QuoteCardProps {
    title: string;
    description: string;
}

function QuoteCard({ title, description }: QuoteCardProps) {
    return (
        <div>
            <div className="flex flex-col border-1 border-b-10 border-black rounded-xl h-full w-fit items-center p-10 gap-3 font-google">
                <h1 className="text-black text-2xl font-bold">{title}</h1>
                <p className="text-black text-justify text-md">{description}</p>
            </div>
        </div>
    )
}

export default QuoteCard;