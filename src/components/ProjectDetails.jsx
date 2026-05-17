import { motion } from "motion/react";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  // Lock background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    // Backdrop — ONLY this scrolls
    <div
      className="fixed inset-0 z-50 flex items-start justify-center backdrop-blur-sm bg-black/50 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      {/* Card — grows naturally, no overflow or max-h */}
      <motion.div
        className="relative w-[92%] max-w-xl my-8 border shadow-lg rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 z-20 p-1.5 rounded-md bg-black/60 hover:bg-gray-600 transition-colors"
        >
          <img src="/assets/close.svg" alt="Close" className="w-5 h-5" />
        </button>

        {/* Project image */}
        <div className="w-full overflow-hidden rounded-t-2xl bg-white/5">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
            style={{ maxHeight: "220px" }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold text-white leading-snug">
            {title}
          </h5>

          <p className="mb-3 text-sm sm:text-base font-normal text-neutral-400 leading-relaxed">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-3 text-sm sm:text-base font-normal text-neutral-400 leading-relaxed"
            >
              {subDesc}
            </p>
          ))}

          {/* Tags + link row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-9 sm:size-10 object-contain hover-animation"
                />
              ))}
            </div>

            <a
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm sm:text-base font-medium hover-animation whitespace-nowrap text-white"
            >
              View Project
              <img src="/assets/arrow-up.svg" alt="" className="size-3.5 sm:size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;