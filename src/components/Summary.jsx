import SummaryChart from "./charts/SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";
import Details from "../components/config/details.json";



export default function Summary() {
  return (
    <section className="relative my-3 border pt-5 h-full bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg   sm:p-2 ">
      <div>
        <h3 className="text-2xl p-5  w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
          جمع‌بندی محله {Details.alley.name}
          <ClipboardCheck size={28} />
        </h3>
        <p className="lg:leading-loose  font-modam px-5  text-justify text-base mb-6  ">
          محله ارتش با موقعیت مرکزی و ساختار منظم، یکی از مناطق نوساز و رو به
          رشد شهر است که فرصت‌های مناسبی برای سرمایه‌گذاری و ساخت‌وساز دارد. این
          محله ساختاری با کیفیت دارد از امنیت بالا، دسترسی خوب به خدمات شهری و
          فضای سبز بهره‌مند است و سرزندگی اجتماعی مناسبی دارد. با وجود چالش‌هایی
          مانند ترافیک ساعات اوج و نبود مسجد، روند توسعه و نوسازی سریع، آینده‌ای
          روشن برای ارتش رقم زده است. ارتش ترکیبی از زندگی مدرن و فرصت‌های توسعه
          پایدار را به ساکنانش ارائه می‌دهد.{" "}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
