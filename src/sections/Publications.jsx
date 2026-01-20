import { useState } from "react";
import Publication from "../components/Publication";
import { myPublications } from "../constants";

const Publications = () => {
  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">Research & Publications</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-8 h-[1px] w-full" />

      {myPublications.map((publication) => (
        <Publication
          key={publication.id}
          {...publication}
        />
      ))}
    </section>
  );
};

export default Publications;