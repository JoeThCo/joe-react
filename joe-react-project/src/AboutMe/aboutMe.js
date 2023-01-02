import { Section } from "./section";
import { SectionCounter } from "./sectionCounter";

export function AboutMe() {
  return (
    <div>
      <h1>Name</h1>
      <Section sectionTitle="About Me" sectionContent="This is about me" />
      <Section sectionTitle="Pets" sectionContent="Mango and Quinn" />
      <SectionCounter sectionTitle="Counter" sectionContent="This counts" />
    </div>
  );
}
