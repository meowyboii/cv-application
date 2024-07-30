import Section from "./Section";
import "../styles/Navbar.css";

export const Navbar = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="container">
      <Section
        isActive={activeIndex === 0}
        counter={1}
        onShow={() => setActiveIndex(0)}
      >
        Profile
      </Section>
      <Section
        isActive={activeIndex === 1}
        counter={2}
        onShow={() => setActiveIndex(1)}
      >
        Education
      </Section>
      <Section
        isActive={activeIndex === 2}
        counter={3}
        onShow={() => setActiveIndex(2)}
      >
        Skills
      </Section>
      <Section
        isActive={activeIndex === 3}
        counter={4}
        onShow={() => setActiveIndex(3)}
      >
        Experience
      </Section>
      <Section
        isActive={activeIndex === 4}
        counter={5}
        onShow={() => setActiveIndex(4)}
      >
        Socials
      </Section>
      <Section
        isActive={activeIndex === 5}
        counter={6}
        onShow={() => setActiveIndex(5)}
      >
        Result
      </Section>
    </div>
  );
};
