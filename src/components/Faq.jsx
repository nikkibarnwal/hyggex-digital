import React from "react";
import Dropdown from "./Dropdown";

const Faq = () => {
  return (
    <div className="px-28">
      <h1 className="text-5xl font-bold textColorBlue py-8">FAQ</h1>
      <Dropdown title="Can education flashcards be used for all age groups?" />
      <Dropdown title="How do education flashcards work?" />
      <Dropdown title="Can education flashcards be used for test preparation?" />
    </div>
  );
};

export default Faq;
