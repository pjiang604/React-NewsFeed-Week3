import { Profiler, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import NewsCard from "./components/Newscard";
import NewsContent from "./components/Newscontent";

function App(props) {
  return (
    <div>
      <Title title="Your Ragdoll News Feed" />
      <NewsCard>
        <NewsContent
          image="https://cats.com/wp-content/uploads/2020/10/Ragdoll-Cat-compressed.jpg"
          title="Ragdoll Cat Colors and Patterns"
          content="Ragdoll cat colors and patterns come in a wide variety. Each one is gorgeous and elegant in its own right. For example, the Ragdoll pictured below, Dandenong Tora Rhianne, is a Seal Mitted with a blaze. The blaze is the white stripe that goes down the center of the nose. The Ragdoll cat has a soft semi-long coat that does not require as regular a grooming as many other long-haired breeds. Ragdolls are born white (unless they are mink cats), and Ragdoll cat colors and patterns come in slowly."
          author="Jenny Dean"
          link="https://www.floppycats.com/ragdoll-cat-colors-patterns.html"
        />
        <NewsContent
          image="https://www.dailypaws.com/thmb/wvddUQm5Q9riiu4lEIW2G_lWsQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-ragdoll-cat-sitting-1030358882-2000-0f1fecbdd71b4becb2f68c2c56f75b77.jpg"
          title="Ragdoll Cat: Breed Information, Traits & Many Photos"
          content="The Ragdoll cat is a large, color-pointed cat breed known for going floppy when picked up, hence why they got the name “ragdoll.” They are known for their laid-back personalities, semi-long coats, blue eyes, and more."
          author="Jenny Dean"
          link="https://www.floppycats.com/ragdoll-cat.html"
        />
        <NewsContent
          image="https://www.floppycats.com/wp-content/uploads/2020/04/Ragdoll-Cat-Caymus-Rolling-in-His-Litter-Box-625x466.webp"
          title="Litter Boxes for High-Spraying Cats"
          content="My mom’s Ragdoll cats, Caymus and Murphy, peed almost standing up, or as they peed, they’d lift their bottoms. In contrast, my 12-year-old Ragdoll cats, Charlie and Trigg, stay in a squatting position the entire time they are peeing.
          My mom had to get high-sided litterboxes because of Caymus and Murphy. Here’s a cat on Instagram that has a similar problem.      
          When I discovered high-sided litter boxes also helped keep the litter inside the box, that was another reason I wanted some."
          author="Daisy"
          link="https://www.floppycats.com/litter-boxes-for-high-spraying-cats.html"
        />
      </NewsCard>
    </div>
  );
}

function Title(props) {
  return <div className="page-title">{props.title}</div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
