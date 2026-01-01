import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";
import Accordion from "./ui/Accordion";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg:grid-cols-6 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-4 col-span-6  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          ویژگی های عملکردی محله ی ارتش
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          محله ارتش با بافتی عمدتاً مسکونی و ظرفیت بالای توسعه، محل ه ای در حال
          رشد میباشد.{" "}
          <strong className="text-purple-800">
            مجاورت با خیابا نهای اصلی شهر و نزدیکی به مرکز شهر و بازار
          </strong>
          ، موجب شده دسترسی به خدمات شهری آسان باشد و بخش زیادی از نیازهای
          روزمره ساکنان در خود محله برطرف شود.
          <br />
        <  Accordion title=
          {
            <span
              className="text-base font-bold bg-text-right text-red-700"
              style={{ fontFamily: "Modam" }}
            >
              {" "}
              الگوی کاربری و فعالیت اقتصادی{" "}
            </span>
          }
          content=
          {
            <ul>

              <li>
              
          بخش زیادی از فعالی تهای تجاری محله در امتداد خیابا نهای اصلی و برخی
          خیابا نهای داخلی شکل گرفته است. این الگو موجب شده جریان اقتصادی در
          محله پویا باشد و خدمات موردنیاز ساکنان در فاصلهای کوتاه در دسترس قرار
          گیرد.
              </li>
            </ul>
          }
          />
        
        </p>
        {/* باکس ۳: نکته کلیدی */}
        <div className="bg-white/40  border-r-4 border-blue-500 shadow-md p-1 mt-3 mb-3">
          <h4 className="flex gap-2 text-blue-600">
            {/* <FaLightbulb size={22} className="text-blue-600" /> */}
            <span className="font-bold text-base">🔍 نکات آماری:</span>
          </h4>
          <p className="font-modam text-[15px] leading-loose text-gray-800  ">
            تعداد ۱۰۰ قطعه با کاربری مختلط )مسکونی–تجاری( بامساحت حدود ۲۵٬۴۵۹
            مترمربع، نشا ندهنده شکلگیری تدریجی{" "}
            <span className="bg-blue-300">بافتی فعال و چند عملکردی</span> در
            محله است .<br />
            ۱۶۰ قطعه زمین بایر با مساحت بیش از ۸۵٬۰۰۰ مترمربع،{" "}
            <span className="bg-blue-300">
              {" "}
              ظرفیت ارزشمندی برای توسعه های آتی
            </span>{" "}
            در زمینه کاربری های مسکونی ، تجاری و خدماتی فراهم کرده است.
          </p>
        </div>
        <Accordion
          title={
            <span
              className="text-base font-bold bg-text-right text-red-700 "
              style={{ fontFamily: "Modam" }}
            >
              {" "}
              ✔کاربری شاخص:
            </span>
          }
          content={
            <ul>
              <li>▪  فرهنگسرای شهرداری و پارک مادر و کودک</li>
              <li>
                این مجموعه فرهنگی–تفریحی به‌عنوان یکی از کاربری‌های شاخص محله
                ارتش شناخته می‌شود. قرارگیری فرهنگسرا و پارک در کنار یکدیگر،{" "}
                <span className="bg-yellow-200">
                  {" "}
                  فضایی مناسب برای فعالیت‌های فرهنگی، اجتماعی و گذران اوقات
                  فراغت ساکنان به‌ویژه خانواده‌ها و کودکان
                </span>{" "}
                فراهم کرده است.
              </li>
            </ul>
          }
        />
        <p className="font-modam text-[15px] leading-loose text-gray-800  ">
          سالن ورزشی، کافه‌ها و رستوران‌های محله ارتش{" "}
          <strong className="text-green-800">
            فضایی ایده‌آل برای فعالیت‌های اجتماعی و گذران اوقات فراغت
          </strong>{" "}
          فراهم کرده‌اند. همچنین،{" "}
          <strong className="bg-red-300">
            وجود بیمارستان ارتش و درمانگاه حضرت زینب
          </strong>{" "}
          دسترسی ساکنان به خدمات بهداشتی و درمانی را بهبود بخشیده است. با این
          حال،<strong className="bg-red-300"> فقدان مسجد</strong> در این محله
          به‌عنوان یکی از کاستی‌های مهم عملکردی محسوب می‌شود.
        </p>
      </div>

      <div className="col-span-6 lg:col-span-2 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-6 shadow-md rounded-xl"
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
