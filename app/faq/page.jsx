"use client"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const faqs = [
  {
    question: "What is KookBook?",
    answer: "KookBook is a platform where users can share their native recipes and connect with a community of food lovers.",
  },
  {
    question: "Is KookBook free to use?",
    answer: "Yes, KookBook is free for newbies and professionals to explore food recipes",
  },
  {
    question: "Can I upload my own recipes?",
    answer: "Absolutely! Anyone can sign up and start sharing their recipes for the community to enjoy.",
  },
  {
    question: "Can I delete my published recipes?",
    answer: "Yes, you can delete anytime.",
  },
  {
    question: "What genres of recipes are available on KookBook?",
    answer: "KookBook features a wide range of genres, including appetizers, dessert, main courses, and more.",
  },
  {
    question: "Can I read recipes offline?",
    answer: "Currently, recipes are available for online reading, but we MAY introduce an offline reading feature in the future.",
  },
];

export default function Faqs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-dvh">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary
            expandIcon={<FaChevronDown className={`transform transition-transform ${expanded === index ? "rotate-180" : "rotate-0"}`} />}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
          >
            <h2 className="text-lg font-semibold">{faq.question}</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">{faq.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}