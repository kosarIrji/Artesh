import MapAnalysis from "./MapAnalysis";

import FloorChartSelector from "../components/charts/FloorChartSelector";
import GhedmatChartSelector from "../components/charts/GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState } from "react";
import { FaCity, FaLightbulb, FaBuilding } from "react-icons/fa";

function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("ghemat");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full  ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 lg:grid grid-cols-6 lg:gap-4 md:col-span-1 h-full ">
          <div className="border col-span-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg pb-6 sm:px-4 md:px-4 p-5 mt-3 ">
            <h3 className="text-2xl  w-full flex flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
              ارتش ؛ محله ای نوساز با چهر های منظم و شهر ی
              <span className="">
                {" "}
                <FaCity size={28} />
              </span>
            </h3>
            <div className=" md:leading-loose  whitespace-pre-line lg:leading-loose   text-justify text-base ">
              <p className="font-modam text-base md:leading-loose lg:leading-loos text-gray-800 ">
                محله ارتش یکی از نواحی در حال توسعه و نوساز میباشد که در سا لهای
                اخیر با سرعت بالایی رشد کرده؛ این محله به دلیل قطعه بندی اصولی،{" "}
                <strong className="text-green-800">
                  شبکه معابر منظم و با کیفیت
                </strong>
                ، ساختاری متفاوت و مدر ن تر از بسیاری دیگر از محلات شهر دار د .
                <br />
                ساخت‌وسازها در این محدوده اغلب به‌صورت آپارتمانی و چندطبقه انجام
                شده‌اند و بهره‌برداری حداکثری از زمین در آن‌ها مشهود است. نمای
                کلی محله، حاصل همین روند نوسازی گسترده و سرمایه‌گذاری بالا در
                ساخت‌وسازهای جدید است.
              </p>
            </div>
            {/* باکس ۲: واقعیت آماری */}
            <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
              <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
                <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
                  <FaBuilding size={22} className="text-[var(--sidebar)]" />
                  میانگین قدمت املاک در محله: ۱۴ سال
                </span>
                <strong className="">
                  - ساختمانهای نوساز: بیش از ۲۰۸ واحد + ۳۱ پروژه در حال ساخت
                </strong>
                <br />
                این اعداد نشا ندهنده ی رونق چشمگیر ساخت وساز و استقبال سرمایه
                گذاران از این محله هستند. محله{" "}
                <span className="bg-red-400">
                  ارتش در دسته ی محلات فرسوده قرار نمی گیرد
                </span>{" "}
                و در مسیر رشد سریع قرار دار د .{" "}
                <strong className="text-red-800">
                  {" "}
                  بیشتر ساختما ن ها نوسازند
                </strong>{" "}
                و از کیفیت ساخت بالایی برخوردارند؛ موضوعی که محله ارتش را از
                بافت های قدیمی تر شهر متمایز می کند . <br />
                <strong>-زمین های بایر: ۱۵۹ قطعه</strong>
                <br />{" "}
                <strong className="text-red-800">
                  این زمین ها ظرفیت بالایی برای توسعه دارند
                </strong>
                ، با این حال، تعداد بالای زمین های خالی می تواند نوعی ناپیوستگی
                در بافت محله ایجاد کند . <br />
                <strong>
                  -۳۱ ملک غیرقابل سکونت + ۷۰ ملک با قدمت بالای ۳۰ سال
                </strong>
                <br />
                این املاک{" "}
                <strong className="text-red-800">
                  عمدتاً در بخش های قدیمی تر محله قرار دارند
                </strong>{" "}
                نوسازی این املاک می تواند به ارتقای کیفیت کالبدی محله کمک کند
                .{" "}
              </p>
            </div>

            <p className="font-modam text-base md:leading-loose text-center lg:leading-loose text-gray-800 ">
              "محله ارتش با{" "}
              <span className="bg-gray-300">
                ساختاری منظم، املاک نوساز و پتانسیل بالای زمین‌های خالی
              </span>
              ، یکی از با ارزش ترین محلات شهر بجنورد میباشد "
            </p>
          </div>

          <motion.div
            className="flex- flex-col gap-3 border col-span-2  bg-white/50 backdrop-blur-md rounded-2xl shadow-lg mt-3  sm:px-4 md:px-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-2 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-5">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex gap-1 w-full ">
                {[
                  { label: "قدمت", value: "ghemat" },
                  { label: "طبقات", value: "tabaghat" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-30 text-sm sm:text-base"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {/* سلکت - در سمت دیگر */}
              <div className="w-full grid  justify-end">
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className=" h-10 px-1 py-1 rounded-xl   self-end text-sm sm:text-base font-medium text-white bg-[var(--text)] hover:bg-[var(--sidebar)] transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto ">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}

              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapAnalysis />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PhysicalAnalysis;
