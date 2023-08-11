const Marquee = () => {
  return (
    <>
      <div className="border-t-2" />
      <div
        className="relative block py-1 overflow-hidden inset-x-1/2 sm:py-2 md:py-3"
        id="marquee-container"
        style={{transform: "translate(-50%, 0)"}}
      >
        <div
          className="block h-full min-w-full m-auto overflow-hidden text-2xl whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl"
          id="marquee"
        >
          <span className="inline-block h-full min-w-full text-center whitespace-nowrap animate-marquee">
            A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man
            can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t
            have enough base­ment swag —
          </span>
          <span className="inline-block h-full min-w-full text-center whitespace-nowrap animate-marquee">
            A man can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man
            can’t have enough base­ment swag — A man can’t have enough base­ment swag — A man can’t
            have enough base­ment swag —
          </span>
        </div>
      </div>
      <div className="border-b-2" />
    </>
  );
};

export default Marquee;
