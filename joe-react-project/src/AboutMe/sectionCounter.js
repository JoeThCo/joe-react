import { useEffect, useState } from "react";
import { Section } from "./section";

export function SectionCounter(props) {
  const [count, setCount] = useState(0);
  const [isSubscribed, setSubscribed] = useState(true);

  useEffect(() => {
    let output = `You clicked ${count} times!`;

    document.title = output;
  });

  function reset() {
    setCount(0);
    setSubscribed(false);
  }

  return (
    <div>
      <Section
        // {...props}
        sectionContent={`${props.sectionContent} ${count}`}
        sectionTitle={props.sectionTitle}
      />
      <button onClick={() => setCount((cur) => cur + 1)}>
        Increment: {count}
      </button>
      <button onClick={() => setSubscribed((cur) => !cur)}>
        isSubscribed: {isSubscribed ? "True" : "False"}
      </button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
