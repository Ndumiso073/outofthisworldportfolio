import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-wrap items-center justify-between py-5 gap-4 sm:py-6"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex-1 min-w-0">
          <p className="text-xl sm:text-2xl font-medium">{title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm sm:text-base">{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation shrink-0 text-sm sm:text-base py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 sm:w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
