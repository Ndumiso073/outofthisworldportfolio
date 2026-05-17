import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-sm py-4 px-3 sm:py-6 sm:px-4"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-xl sm:rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-1.5 sm:p-2 rounded-sm top-2 right-2 sm:top-3 sm:right-3 z-10 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <img
          src={image}
          alt={title}
          className="w-full rounded-t-xl sm:rounded-t-2xl object-cover max-h-48 sm:max-h-96"
        />

        <div className="p-3 sm:p-5">
          <h5 className="mb-2 text-lg sm:text-2xl font-bold text-white">{title}</h5>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 sm:mb-3 text-sm sm:text-base font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 sm:size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm sm:text-base font-medium hover-animation whitespace-nowrap"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-3 sm:size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;