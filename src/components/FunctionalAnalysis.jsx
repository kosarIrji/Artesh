import FunctionalPieChart from "./FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";


export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full  md:mb-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="col-span-1 mb-3 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5  mt-3 text-xl w-full">
        <h3 className="text-3xl sm:text-2xl mt-5  w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        تحلیل عملکردی محله {Details.alley.name}
          <Layers size={28} />
        </h3>
        <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  mb-3 ">
        {Details.functionalAnalysis}
        </p>
        <div className="mt-4">
          <FunctionalPieChart />
        </div>
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="md:col-span-2 shadow-md rounded-xl "
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
