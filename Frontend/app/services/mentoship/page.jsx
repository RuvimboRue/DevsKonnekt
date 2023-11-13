import Description from "@/components/services/mentorship/description";
import Hero from "@/components/services/mentorship/hero";
import Mentees from "@/components/services/mentorship/mentees";
import Mentors from "@/components/services/mentorship/mentors";
import Why from "@/components/services/mentorship/why";
import React from "react";

const Mentoship = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Mentees />
      <Mentors />
      <Why />
    </div>
  );
};

export default Mentoship;
