/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "../components/charts/AccessesArzeMabar";
import AccsessesKyfiatMabar from "../components/charts/AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map } from "lucide-react";
import { Button } from "../components/ui/Button";
import Details from "../components/config/details.json";
import { useState } from "react";
import Accordion from "./ui/Accordion";

export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-2xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            دسترسی و کیفیت معابر
            {Details.alley.name}{" "}
            <span>
              <Map size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محله ارتش از نظر دسترسی شهری در <strong>وضعیت بسیار خوبی</strong>{" "}
            قرار دارد و <strong>ارتباط مستقیمی با معابر اصلی</strong> شهر دارد. رفت‌وآمد در بیشتر
            ساعات روز روان است، هرچند در ساعات اوج، برخی معابر اصلی با افزایش
            حجم ترافیک مواجه می‌شوند.
            <br /> <strong>نکته:</strong> نزدیکی به مرکز شهر موجب افزایش حجم
            عبور و ترافیک خصوصا در ساعات خاص می‌شود.
          </p>
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-yellow-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                معابر اصلی :
              </span>
            }
            content={
              <ul>
                <li>▪ بلوار شهید صیاد شیرازی )غرب (</li>
                <li>▪ خیابان طالقانی (جنوب)</li>

                <li>▪ بلوار شهدا (شمال) </li>
                <li>▪ خیابان شهید امامی شمالی (شرق) </li>
              </ul>
            }
          />
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-green-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                تقاطع‌های مهم:
              </span>
            }
            content={
              <ul>
                <li>▪چهارراه امیریه</li> <li>▪میدان شهدای گمنام</li>{" "}
                <li>▪چهارراه تختی</li> <li>▪چهارراه صفا</li>
                <li>▪چهارراه صیاد شیرازی</li>
              </ul>
            }
          />
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-blue-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                میانگین کیفیت معابر:۴۵ از ۵۰{" "}
              </span>
            }
            content={
              <ul>
                <li>
                  این عدد بیانگر شرایط مطلوب معابر از نظر عرض خیابان‌ها، کیفیت
                  کف‌سازی، روشنایی و فضای سبز است. ترکیب کیفیت کالبدی بالا و
                  دسترسی مناسب، هم رفاه حرکتی ساکنان را ارتقا داده و هم ارزش
                  فضایی محله را افزایش داده است. معابر داخلی نیز با طراحی منظم و
                  عرض مناسب، شرایط مطلوبی برای تردد سواره و پیاده فراهم
                  کرده‌اند.
                </li>
                <li className="r-5 text-blue-700">نکته ساختاری:</li>
                <li>
                  بخش قابل‌توجهی از معابر، به‌ویژه در نواحی تازه‌ساز، به‌صورت
                  بن‌بست طراحی شده‌اند؛ رویکردی هدفمند که با عرض مناسب و
                  اولویت‌دادن به تردد پیاده، محیطی آرام، امن و باکیفیت برای
                  زندگی مسکونی فراهم آورده است.
                </li>
              </ul>
            }
          />
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
          " وجود پیاده‌روهای با کیفیت و پیوسته، نزدیکی به ایستگاه‌های حمل‌ونقل عمومی، شرایط مناسب پیاده‌روی و تردد بدون خودرو را برای ساکنین  فراهم کرده است."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-2 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
