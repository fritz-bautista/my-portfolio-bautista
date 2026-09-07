
interface QuoteCardProps {
    title: string;
    description: string;
}

function QuoteCard({ title, description }: QuoteCardProps) {
    return (
        <div>
            <div className="border rounded-2xl bg-bg2 h-full w-fit items-center p-10">
                <h1 className="text-white">{title}</h1>
                <p className="text-white">{description}</p>
            </div>
        </div>
    )
}

export default QuoteCard;