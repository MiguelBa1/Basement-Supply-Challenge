const Marquee = () => {
    return (
        <>
            <div className="border-t-2"></div>
            <div
                id="marquee-container"
                className="relative block inset-x-1/2 overflow-hidden py-1 sm:py-2 md:py-3"
                style={{ transform: "translate(-50%, 0)" }}
            >
                <div
                    id="marquee"
                    className="block overflow-hidden m-auto whitespace-nowrap min-w-full h-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                >
                    <span className="inline-block text-center whitespace-nowrap min-w-full h-full animate-marquee">
                        A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t have enough base­ment swag —
                    </span>
                    <span className="inline-block text-center whitespace-nowrap min-w-full h-full animate-marquee">
                        A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t have enough base­ment swag —
                    </span>
                </div>
            </div>
            <div className="border-b-2"></div>
        </>
    )
}
export default Marquee