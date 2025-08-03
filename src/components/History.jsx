
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  
  ArrowBigDownIcon,
  ArrowBigLeftIcon,
} from "lucide-react";
import Details from "../components/config/details.json";

function History() {
  const images = [
    { year: "۱۳۸۴", src: "./images/2005.jpg" },
     { year: "۱۴۰۴ ", src: "./images/2025.jpg" },
  ];

  return (
    <section className="my-3 border bg-white/50 backdrop-blur-md rounded-2xl shadow-md p-6">
      <h3 className="text-3xl sm:text-2xl w-full flex  flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
        تاریخچه محله {Details.alley.name}
        <BookOpenIcon size={28} />
      </h3>

      <p className="md:leading-loose whitespace-pre-line lg:leading-loose font-modam text-justify text-base mb-4">
        {Details.history}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 relative">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img
              src={item.src}
              loading="lazy"
              alt={`محله ارتش در سال ${item.year}`}
              className="rounded-xl shadow-md w-[400px] md:max-w-[600px] object-cover"
            />
            <p className="text-center mt-3 text-[var(--text)] text-sm md:text-base leading-relaxed">
              محله ارتش - سال {item.year}
            </p>

            {/* فلش بین تصاویر فقط بعد از تصویر اول */}
            {index === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="my-4 md:my-0 md:absolute md:top-1/2 md:left-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2"
              >
                {/* فلش دسکتاپ */}
                <ArrowBigLeftIcon size={44}
                  className="hidden md:block text-[var(--text)] animate-bounce-left  "
                />
                {/* فلش موبایل */}
                <ArrowBigDownIcon size={44}
                  className="block md:hidden text-[var(--text)] animate-bounce-down "
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default History;
