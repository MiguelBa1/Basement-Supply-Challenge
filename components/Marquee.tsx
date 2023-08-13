import styles from "../css/marquee.module.css";

const Marquee = () => {
  const text = "A man can’t have enough basement swag";
  const repeatedText = `${text} — `.repeat(6);

  return (
    <>
      <div className="py-1 overflow-hidden text-2xl border-t-2 border-b-2 border-white font-basement-black md:text-4xl">
        <div className={`whitespace-nowrap ${styles.animateMarquee}`} id="marquee">
          <span>{repeatedText}</span>
          {/* Duplicate the text to make it loop seamlessly */}
          <span>{repeatedText}</span>
        </div>
      </div>
    </>
  );
};

export default Marquee;
