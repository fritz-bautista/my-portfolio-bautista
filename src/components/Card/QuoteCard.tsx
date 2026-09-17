
interface QuoteCardProps {
    title: string;
    description: string;
}

function QuoteCard({ title, description }: QuoteCardProps) {
    return (
        <div>
            <div className="flex flex-col border rounded-2xl bg-bg2 h-full w-fit items-left p-10 gap-3">
                <h1 className="text-white text-2xl font-bold">{title}</h1>
                <p className="text-white text-xl">{description}</p>
            </div>
        </div>
    )
}

export default QuoteCard;