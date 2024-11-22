import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { MdOutlineHandshake, MdOutlineCancel } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // language
  const { t, i18n } = useTranslation();

  const languages = localStorage.getItem("i18nextLng");
  const languageChange = (e) => {
    const slectedLanguage = e.target.value;
    i18n.changeLanguage(slectedLanguage);
  };

  // faq
  const [faq, setFaq] = useState("1");

  // contact
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const validateInputs = () => {
    if (!name.trim()) {
      setError("Исмингизни киритинг.");
      return false;
    }
    return true;
  };
  const SendMessage = async (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validateInputs()) return;

    const token = "7913792544:AAE2O9y-RBQ_qeBOciy9sX8_O11wcroB6Zw";
    const chat_id = 5235241793;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `Ism: ${name}\nTelefon: ${phone}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: message,
      });
      setSuccess(true);
      setName("");
      setPhone("");
    } catch (error) {
      setError("Хабар юборишда хатолик юз берди. Кейинроқ уриниб кўринг.");
      console.error("Xatolik yuz berdi", error);
    }
  };

  // AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [menu, setMenu] = useState(false);

  return (
    <div className="container px-2 m-auto">
      <div className="container fixed top-0 z-30 flex items-center justify-between w-full px-3 py-3 m-auto bg-white lg:px-6">
        <a href="/">
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
            alt="logo"
            width={140}
            height={40}
            className="w-[8.7rem] h-10 lg:w-[300px] lg:h-[80px]"
          />
        </a>
        <div className="flex items-center gap-5">
          <ul className="hidden gap-5 lg:flex">
            <li className="text-xl font-medium text-[#00000098] hover:text-black">
              <a href="#">{t("header.Асосий")}</a>
            </li>
            <li className="text-xl font-medium text-[#00000098] hover:text-black">
              <a href="#biz_haqimizda">{t("header.ҳақимизда")}</a>
            </li>
            <li className="text-xl font-medium text-[#00000098] hover:text-black">
              <a href="#hizmatlar">{t("header.Хизматлар")}</a>
            </li>
            <li className="text-xl font-medium text-[#00000098] hover:text-black">
              <a href="#faq">{t("header.ФАҚ")}</a>
            </li>
          </ul>
          <select
            name="lang"
            onChange={languageChange}
            value={languages}
            className="text-[#000000f4] border-2 py-1 px-3 font-medium text-base lg:font-semibold lg:text-xl rounded-xl   border-[#0000007a] mr-10"
          >
            <option value="uz">Ўзбекча</option>
            <option value="ru">Русский</option>
          </select>
          <a href="#contact" className="hidden lg:flex">
            {" "}
            <div className="relative inline-block">
              <button className="relative z-10 text-2xl font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-3 px-8 rounded-3xl">
                {t("header.Богланиш")}
              </button>
              <span className="absolute top-0 left-0 w-full h-[3px] bg-white opacity-70 animate-slide"></span>
            </div>
          </a>
          <CgDetailsMore
            className="text-4xl font-semibold lg:hidden"
            onClick={() => {
              setMenu(true);
            }}
          />
          {menu && (
            <div className="absolute top-0 z-50 flex w-full h-full min-h-screen -left-2 lg:hidden">
              <div
                className="bg-black w-[40%] opacity-40"
                onClick={() => setMenu(false)}
              ></div>
              <div className="flex flex-col items-start w-[60%] pt-4 px-4 bg-white">
                <MdOutlineCancel
                  className="self-end mb-4 text-3xl text-black cursor-pointer"
                  onClick={() => setMenu(false)}
                />
                <ul className="space-y-4">
                  <li
                    className="text-base font-medium text-[#00000098] hover:text-black"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    <a href="#">{t("header.Асосий")}</a>
                  </li>
                  <li
                    className="text-base font-medium text-[#00000098] hover:text-black"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    <a href="#biz_haqimizda">{t("header.ҳақимизда")}</a>
                  </li>
                  <li
                    className="text-base font-medium text-[#00000098] hover:text-black"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    <a href="#hizmatlar">{t("header.Хизматлар")}</a>
                  </li>
                  <li
                    className="text-base font-medium text-[#00000098] hover:text-black"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    <a href="#faq">{t("header.ФАҚ")}</a>
                  </li>
                </ul>
                <div className="w-full mt-10 text-center">
                  <a
                    href="#contact"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    <button className="z-10 text-lg font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-1 px-6 rounded-3xl">
                      {t("header.Богланиш")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* asosiy  */}
      <div className="relative items-center px-5 mt-24 lg:mt-32 lg:px-4 lg:py-4 lg:flex">
        <div className="md:w-[50%] lg:py-0 lg:px-0 py-4 px-3 overflow-hidden">
          <h1
            data-aos="fade-right"
            className="lg:text-8xl text-5xl  text-white lg:text-[#093fb3] font-medium lg:px-0"
          >
            {t("asosiy.Дизинфексия")}
          </h1>
          <div className="flex items-center pr-4">
            <p
              data-aos="fade-right"
              className="lg:text-xl text-sm font-medium text-[#ebece6] lg:text-[#272121] lg:my-0 my-5"
            >
              {t("asosiy.p")}
            </p>
            <img
              src="https://superdez.uz/images/icon/d1.png"
              alt="sz"
              width={190}
              height={100}
              className="hidden lg:flex"
            />
          </div>
          <a data-aos="fade-right" href="#contact">
            {" "}
            <button className="lg:text-2xl font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-3 px-6 lg:py-3 lg:px-8 rounded-3xl">
              {t("header.Богланиш")}
            </button>
          </a>
        </div>
        <div className="absolute top-0 w-[93%] h-full lg:w-auto lg:h-auto -z-10 lg:static">
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
            alt="img"
            width={750}
            height={700}
            className="object-cover w-full h-full lg:w-[750px] lg:h-[700px] rounded-xl filter brightness-50 lg:brightness-100"
          />
        </div>
      </div>
      {/* biz haqimizda */}
      <div id="biz_haqimizda" className="flex flex-col p-4 mt-20">
        <div className="lg:pb-8 pb-6 text-[#020c31] lg:text-[40px] text-2xl font-bold border-b-2">
          <h1 data-aos="zoom-in">{t("xaqida.Ҳақида")}</h1>
        </div>
        <ul
          data-aos="fade-right"
          className="flex flex-col items-start justify-between gap-4 mt-5 lg:flex-row"
        >
          <li className="lg:w-[400px] lg:border-none border rounded-lg lg:py-0 py-2 lg:px-0 px-4">
            <AiOutlineThunderbolt className="lg:text-[80px] text-[60px] text-[#1c4cf7] ml-2" />
            <h1 className="lg:text-[30px] text-xl font-bold lg:max-w-[340px] max-w-[190px] lg:mb-5 mb-3">
              {t("xaqida.Тезда")}
            </h1>
            <p className="lg:w-[300px] text-[#676d83] lg:text-base text-xs">
              {t("xaqida.p1")}
            </p>
          </li>
          <li className="lg:w-[400px] lg:border-none border rounded-lg lg:py-0 py-2 lg:px-0 px-4">
            <GiAchievement className="lg:text-[80px] text-6xl text-[#1c4cf7] ml-2" />
            <h1 className="lg:text-[30px] text-xl font-bold lg:max-w-[360px] max-w-[190px] lg:mb-5 mb-3">
              {t("xaqida.Йетук")}
            </h1>
            <p className="lg:w-[300px] text-[#676d83] lg:text-base text-xs">
              {t("xaqida.p2")}
            </p>
          </li>
          <li className="lg:w-[400px] lg:border-none border rounded-lg lg:py-0 py-2 lg:px-0 px-4">
            <MdOutlineHandshake className="lg:text-[80px] text-6xl text-[#1c4cf7] ml-2" />
            <h1 className="lg:text-[30px] text-xl font-bold lg:max-w-[360px] max-w-[190px] lg:mb-5 mb-3">
              {t("xaqida.Сизга")}
            </h1>
            <p className="lg:w-[300px] text-[#676d83] lg:text-base text-xs">
              {t("xaqida.p3")}
            </p>
          </li>
        </ul>
      </div>
      <div
        className="lg:flex hidden relative lg:bg-center w-full p-4 lg:mt-20 mt-10 lg:rounded-none rounded-3xl lg:h-[600px]"
        style={{
          backgroundImage:
            'url("https://www.dezinfeksiyatashkent.uz/assets/hh-32dbdc9d.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:w-1/2"></div>
        <div className="absolute inset-0 bg-black lg:bg-opacity-50 bg-opacity-30 rounded-3xl lg:rounded-none"></div>
        <div className="z-0 mt-8 text-white lg:mt-20">
          <h1
            data-aos="fade-left"
            className="lg:max-w-[558px] lg:text-[40px] text-xl font-bold mb-5 lg:leading-[48px]"
          >
            {t("xaqida.Клапа")}
          </h1>
          <p
            data-aos="fade-left"
            className="lg:max-w-[310px] text-base leading-6 mb-14"
          >
            {t("xaqida.p4")}
          </p>
          <a data-aos="fade-left" href="#contact">
            {" "}
            <button className="lg:text-2xl text-lg font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white lg:py-3 lg:px-8 py-3 px-6 rounded-3xl">
              {t("header.Богланиш")}
            </button>
          </a>
        </div>
      </div>
      {/* hizmatlar */}
      <div id="hizmatlar" className="p-4 mt-12 lg:mt-24">
        <div>
          <h1
            data-aos="zoom-in"
            className="text-[#020c31] lg:text-[52px] text-[35px] font-bold mb-4 leading-[64px]"
          >
            {t("xizmatlar.Хизматлар")}
          </h1>
          <p
            data-aos="zoom-in"
            className="max-w-[335px] text-[#666] text-lg leading-6"
          >
            {t("xizmatlar.p")}
          </p>
        </div>
        <ul className="w-full mt-10 space-y-10">
          <li
            data-aos="fade-right"
            className="flex lg:flex-row flex-col py-3 border-2 lg:px-14 px-5 rounded-2xl border-[#383434] justify-between items-center"
          >
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dizinfeksiya-52660f2d.png"
              alt="virus"
              width={200}
              height={200}
              className="lg:w-[300px] lg:h-[300px]"
            />
            <div className="max-w-[900px]">
              <h1 className="text-[#020c31] lg:text-[32px] text-[26px] font-bold mb-3">
                {t("xizmatlar.Дезинфексия")}
              </h1>
              <p className="text-[#495157] lg:text-base text-sm font-base">
                {t("xizmatlar.p1")}
              </p>
            </div>
          </li>
          <li
            data-aos="fade-right"
            className="flex lg:flex-row flex-col py-3 border-2 lg:px-14 px-5 rounded-2xl border-[#383434] justify-between items-center"
          >
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dezinyeksiya-bea8e70f.png"
              alt="virus"
              width={200}
              height={200}
              className="lg:w-[300px] lg:h-[300px]"
            />
            <div className="max-w-[900px]">
              <h1 className="text-[#020c31] lg:text-[32px] text-[26px] font-bold mb-3">
                {t("xizmatlar.Дезинсексия")}
              </h1>
              <p className="text-[#495157] lg:text-base text-sm font-base">
                {t("xizmatlar.p2")}
              </p>
            </div>
          </li>
          <li
            data-aos="fade-right"
            className="flex lg:flex-row flex-col py-3 border-2 lg:px-14 px-5 rounded-2xl border-[#383434] justify-between items-center"
          >
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/derazatsiya-83b522bf.png"
              alt="virus"
              width={200}
              height={200}
              className="lg:w-[300px] lg:h-[300px]"
            />
            <div className="max-w-[900px]">
              <h1 className="text-[#020c31] lg:text-[32px] text-[26px] font-bold mb-3">
                {t("xizmatlar.Дератизатсия")}
              </h1>
              <p className="text-[#495157] lg:text-base text-sm font-base">
                {t("xizmatlar.p3")}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-4 mt-12 lg:mt-24">
        <h1
          data-aos="zoom-in"
          className="text-[#020c31] lg:text-[52px] text-[35px] font-bold mb-10 leading-[64px]"
        >
          {t("xizmat.Хизмат")}
        </h1>
        <ul className="grid gap-5 lg:grid-cols-3">
          <li
            data-aos="fade-right"
            className="rounded-xl bg-[#F3F6F6] p-5 relative"
          >
            <h1 className="text-[#020c31] lg:text-[32px] text-[25px] font-bold mb-5">
              {t("КЛАПАЛАР")}
            </h1>
            <p className="text-[#495157] lg:text-lg text-[15px] font-semibold max-w-[410px] leading-5">
              {t("xizmat.p1")}
            </p>
            <a href="#contact" className="flex items-end justify-end mt-28">
              <button className="text-xl font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-3 px-10 rounded-3xl ">
                {t("header.Богланиш")}
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full left-10"
              />
            </a>
          </li>
          <li
            data-aos="fade-right"
            className="rounded-xl bg-[#F3F6F6] p-5 relative"
          >
            <h1 className="text-[#020c31] lg:text-[32px] text-[25px] font-bold mb-5">
              {t("xizmat.ТАРАКАНЛАР")}
            </h1>
            <p className="text-[#495157] lg:text-lg text-[15px] font-semibold max-w-[410px] leading-5">
              {t("xizmat.p2")}
            </p>
            <a href="#contact" className="flex items-end justify-end mt-28">
              <button className="text-xl font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-3 px-10 rounded-3xl ">
                {t("header.Богланиш")}
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full left-10"
              />
            </a>
          </li>
          <li
            data-aos="fade-right"
            className="rounded-xl bg-[#F3F6F6] p-5 relative"
          >
            <h1 className="text-[#020c31] lg:text-[32px] text-[25px] font-bold mb-5">
              {t("xizmat.ЧАЁН")}
            </h1>
            <p className="text-[#495157] lg:text-lg text-[15px] font-semibold max-w-[410px] leading-5">
              {t("xizmat.p3")}
            </p>
            <a href="#contact" className="flex items-end justify-end mt-28">
              <button className="text-xl font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-3 px-10 rounded-3xl ">
                {t("header.Богланиш")}
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full left-10"
              />
            </a>
          </li>
          <li
            data-aos="fade-right"
            className="rounded-xl bg-[#F3F6F6] p-5 relative"
          >
            <h1 className="text-[#020c31] lg:text-[32px] text-[25px] font-bold mb-5">
              {t("xizmat.КЕМИРУВЧИЛАР")}
            </h1>
            <p className="text-[#495157] lg:text-lg text-[15px] font-semibold max-w-[410px] leading-5">
              {t("xizmat.p4")}
            </p>
            <a href="#contact" className="flex items-end justify-end mt-28">
              <button className="text-xl font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-3 px-10 rounded-3xl ">
                {t("header.Богланиш")}
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full left-10"
              />
            </a>
          </li>
          <li
            data-aos="fade-right"
            className="rounded-xl bg-[#F3F6F6] p-5 relative"
          >
            <h1 className="text-[#020c31] lg:text-[32px] text-[25px] font-bold mb-5">
              {t("xizmat.БУРГАЛАР")}
            </h1>
            <p className="text-[#495157] lg:text-lg text-[15px] font-semibold max-w-[410px] leading-5">
              {t("xizmat.p5")}
            </p>
            <a href="#contact" className="flex items-end justify-end mt-28">
              <button className="text-xl font-medium bg-[rgb(37,33,251)] hover:bg-blue-500 text-white py-3 px-10 rounded-3xl ">
                {t("header.Богланиш")}
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full left-10"
              />
            </a>
          </li>
        </ul>
      </div>
      {/* faq */}
      <div id="faq" className="p-4 mt-12 lg:mt-24">
        <div className="flex flex-col py-4 border-t-2 lg:flex-row">
          <div className="text-[#020c31] lg:text-[48px] text-[30px] w-[40%] font-bold leading-[48px] mt-3 lg:mb-0 mb-5">
            ФАҚ
          </div>
          <ul className="mt-4 space-y-10 w-[100%]">
            <li
              className={`border-b-2 transition-all duration-[600ms] ${
                faq == 1
                  ? "lg:h-[220px] h-[280px]"
                  : "overflow-y-hidden lg:h-[79px] h-[75px]"
              }`}
            >
              <button
                className="flex items-center justify-between w-full mb-5"
                onClick={() => setFaq(1)}
              >
                <h1 className="text-[#676d83] lg:text-[30px] text-start text-[15px] font-semibold leading-8 ">
                  {t("fak.Зараркунандаларни")}
                </h1>
                <div className="w-[50px] h-[50px] bg-[#f2f2f2] rounded-full flex items-center justify-center px-2 mr-3">
                  <IoIosArrowDown className="text-[35px]" />
                </div>
              </button>
              <p
                className={`text-[#676d83] lg:text-2xl text-[15px] leading-8 pb-10 pr-3 `}
              >
                {t("fak.p1")}
              </p>
            </li>
            <li
              className={`border-b-2 transition-all duration-[600ms] ${
                faq == 2 ? "h-[220px]" : "overflow-y-hidden h-[80px]"
              }`}
            >
              <button
                className="flex items-center justify-between w-full mb-5"
                onClick={() => setFaq(2)}
              >
                <h1 className="text-[#676d83] lg:text-[30px] text-start text-[15px] font-semibold leading-8 ">
                  {t("fak.Сиз")}
                </h1>
                <div className="w-[50px] h-[50px] bg-[#f2f2f2] rounded-full flex items-center justify-center px-2 mr-3">
                  <IoIosArrowDown className="text-[35px]" />
                </div>
              </button>
              <p
                className={`${
                  faq != 2 && "hidden"
                } text-[#676d83] lg:text-2xl text-[15px] leading-8 pb-10 pr-3 `}
              >
                {t("fak.p2")}
              </p>
            </li>
            <li
              className={`border-b-2 transition-all duration-[600ms] ${
                faq == 3
                  ? "lg:h-[220px] h-[260px]"
                  : "overflow-y-hidden h-[80px]"
              }`}
            >
              <button
                className="flex items-center justify-between w-full mb-5"
                onClick={() => setFaq(3)}
              >
                <h1 className="text-[#676d83] lg:text-[30px] text-[15px] font-semibold leading-8 text-start ">
                  {t("fak.Менга")}
                </h1>
                <div className="w-[50px] h-[50px] bg-[#f2f2f2] rounded-full flex items-center justify-center px-2 mr-3">
                  <IoIosArrowDown className="text-[35px]" />
                </div>
              </button>
              <p
                className={`${
                  faq != 3 && "hidden"
                } text-[#676d83] lg:text-2xl text-[15px] leading-8 pb-10 pr-3 `}
              >
                {t("fak.p3")}
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* contact */}
      <div id="contact" className="w-full p-4 mt-12 lg:mt-24">
        <div className="w-full relative rounded-2xl h-[550px] flex items-center lg:justify-normal justify-center lg:pl-32 bg-[radial-gradient(333.17%_80.94%_at_51.32%_69.21%,_#3DA0FC_0%,_rgba(2,_227,_214,_0.2)_100%)]">
          <div
            data-aos="fade-right"
            className="bg-white lg:w-[456px] w-[90%] py-2 px-5 h-[385px] rounded-xl flex flex-col gap-10"
          >
            <h1 className="text-[#242825] lg:text-[35px] text-[28px] leading-[40px] font-bold">
              {t("Малумотингизни")}
            </h1>
            <form onSubmit={SendMessage} className="flex flex-col gap-6">
              {success && (
                <div className="text-green-500">
                  {t('xabar')}
                </div>
              )}

              <input
                type="text"
                id="name"
                placeholder="Исмингиз"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 h-[50px] bg-[#F2F2F2] text-[#242825] rounded-lg text-base leading-6 font-medium"
              />
              <input
                type="text"
                id="phone"
                placeholder="+998-90-123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 h-[50px] bg-[#F2F2F2] text-[#242825] rounded-lg text-base leading-6 font-medium"
              />
              <button
                type="submit"
                className="w-full px-4 h-[50px] bg-[#242825] text-white text-base font-medium rounded-lg"
              >
                Юбориш
              </button>
            </form>
          </div>
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png"
            alt=""
            className="absolute bottom-0 right-0 hidden lg:block"
          />
        </div>
      </div>
      <div className="mt-12 mb-20 border-t-2 lg:mb-40 lg:mt-24">
        <div className="flex flex-col p-4 pt-20 lg:gap-32 lg:flex-row">
          <a href="/">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
              alt="logo"
              width={300}
              height={90}
            />
          </a>
          <div data-aos="fade-right" className="space-y-4">
            <a href="/" className="flex items-center gap-3 cursor-pointer">
              <span className="flex items-center justify-center px-1 py-[6px] border rounded-lg">
                <IoLocationOutline className="text-[20px]" />
              </span>
              <p className="text-[#242825cc] text-base font-medium">
                {t("shahar")}
              </p>
              <FiArrowUpRight className="text-xl" />
            </a>
            <a
              href="tel:+998770770403"
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="flex items-center justify-center px-1 py-[6px] border rounded-lg">
                <FiPhone className="text-[20px]" />
              </span>
              <p className="text-[#242825cc] text-base font-medium">
                +998 99 119 99 33
              </p>
              <FiArrowUpRight className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
