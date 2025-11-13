export interface TextBlockProps {
    title: string
    content: string
    className?: string
}

const TextBlock = ({ title, content, className }: TextBlockProps) => {
    return (
        <div
            className={`
                flex flex-col justify-center items-start gap-1 px-8 py-6 bg-dark rounded-md
                ${className}
            `}
        >
            <h3 className="text-gray-primary text-2xl font-extrabold">
                {title}
            </h3>
            <p className="text-gray-primary text-md font-normal">{content}</p>
        </div>
    )
}

export default TextBlock
