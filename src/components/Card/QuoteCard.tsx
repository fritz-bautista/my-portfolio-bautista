
interface QuoteCardProps {
    title: string;
    description: string;
}

function QuoteCard({ title, description }: QuoteCardProps) {
    return (
        <div>
            <div className="flex flex-col border-black rounded-4xl h-full w-fit items-center p-10 gap-3">
                <h1 className="text-black text-2xl font-bold">{title}</h1>
                <p className="text-black text-center text-justify text-xl">{description}</p>
            </div>
        </div>
    )
}

export default QuoteCard;