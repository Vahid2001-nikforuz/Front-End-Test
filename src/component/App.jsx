import React from "react";
import Card from "./card";
import content from "./content";
function createcard(input) {
  return (
    <Card
      id={input.id}
      key={input.id}
      title={input.title}
      emoji={input.emoji}
      paragraph={input.paragraph}
      li_1={input.li_1}
      li_2={input.li_2}
      li_3={input.li_3}
    />
  )
}
function App() {
  return (
    <div>{content.map(createcard)}</div>

  )
}

export default App;