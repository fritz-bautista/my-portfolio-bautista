function TextMarquee() {
    const texts = [
    "Passion",
    "-",
    "Purpose",
    "-",
    "Identity",
    "-",
    ]
    return (
        <div className="overflow-hidden whitespace-nowrap w-full bg-secondary">
            <div className="flex w-max p-10 animate-marquee">
                {[...texts, ...texts].map((text, index) => (
                    <span
                    key = {index}
                    className="mx-10 text-1xl font-google font-bold flex-shrink-0">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default TextMarquee;