import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { MdOutlineHandshake } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiArrowUpRight,FiPhone } from "react-icons/fi";
import { Axios } from "axios";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  const { t, i18n } = useTranslation();
  const [faq, setFaq] = useState("1");

  const SendMessage = (e) =>{
    e.preventDefault();
    const  token = "7913792544:AAE2O9y-RBQ_qeBOciy9sX8_O11wcroB6Zw";
    const chat_id = 5235241793;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name=document.getElementById("name").value;
    const phone=document.getElementById("phone").value;
    Axios({
      url:url,
      method: "POST",
      data: {
        "chat_id": chat_id,
        text: name
      }
    }).then((res)=>{
      alert("yuborildi")
    }).catch((error)=>{
      console.log("yuborishda xatolik");
      
    })
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 z-30 flex items-center justify-between w-full p-4 bg-white">
        <img
          src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
          alt="logo"
          className="w-[140px] h-[40px] md:w-[200px] md:h-[55px] lg:w-[300px] lg:h-[80px]"
        />
        <div className="flex items-center gap-5">
          <ul className="items-center hidden gap-5 lg:flex">
            <li className="text-xl font-medium text-[#00000098]">Асосий</li>
            <li className="text-xl font-medium text-[#00000098]">
              Биз ҳақимизда{" "}
            </li>
            <li className="text-xl font-medium text-[#00000098]">Хизматлар</li>
            <li className="text-xl font-medium text-[#00000098]">ФАҚ</li>
          </ul>
          <select
            name="lang"
            id="lang"
            className="text-[#000000f4] border-2 py-1 px-3 font-semibold text-xl rounded-xl   border-[#0000007a] mr-10"
          >
            <option value="uz">Ўзбекча</option>
            <option value="uz">Русский</option>
          </select>
          <a href="tel:+998770770403" className="hidden lg:flex">
            {" "}
            <button className="text-2xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-8 rounded-3xl">
              Богланиш
            </button>
          </a>
          <CgDetailsMore className="text-4xl font-semibold lg:hidden" />
        </div>
      </div>
      <div className="flex items-center p-4 mt-32">
        <div className="w-[50%]">
          <h1 data-aos="fade-right" className="text-8xl text-[#093fb3] font-medium">
            Дизинфексия хизмати
          </h1>
          <div className="flex items-center">
            <p data-aos="fade-right" className="text-xl font-medium text-[#272121]">
              Биз Тошкентда 10 йилдан бери профессионал дезинфексия ишларини
              олиб борамиз, шунинг учун биринчи марта зараркунандалардан қандай
              қутулишни биламиз.
            </p>
            <img
              src="https://superdez.uz/images/icon/d1.png"
              alt="sz"
              width={200}
              height={100}
            />
          </div>
          <a data-aos="fade-right" href="tel:+998770770403">
            {" "}
            <button className="text-2xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-8 rounded-3xl">
              Богланиш
            </button>
          </a>
        </div>
        <div>
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
            alt="img"
            width={750}
            height={700}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col p-4 mt-20">
        <div className="pb-8 text-[#020c31] text-[40px] font-bold border-b-2">
          <h1 data-aos="zoom-in">Ҳақида</h1>
        </div>
        <ul data-aos="fade-right" className="flex items-start justify-between mt-5">
          <li className="w-[400px]">
            <AiOutlineThunderbolt className="text-[80px] text-[#1c4cf7] ml-2" />
            <h1 className="text-[30px] font-bold max-w-[360px] mb-5">
              Тезда Хизмат <br />
              Кўрсатиш
            </h1>
            <p className="w-[300px] text-[#676d83] text-base">
              АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ
              БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ
              БЎЛИБ ҚОЛАДИ.
            </p>
          </li>
          <li className="w-[400px]">
            <GiAchievement className="text-[80px] text-[#1c4cf7] ml-2" />
            <h1 className="text-[30px] font-bold max-w-[360px] mb-5">
              Йетук Мутаҳасислаpимиз
            </h1>
            <p className="w-[300px] text-[#676d83] text-base">
              БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ:
              ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ,
              ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.
            </p>
          </li>
          <li className="w-[400px]">
            <MdOutlineHandshake className="text-[80px] text-[#1c4cf7] ml-2" />
            <h1 className="text-[30px] font-bold max-w-[360px] mb-5">
              Сизга Мақул Вақтда
            </h1>
            <p className="w-[300px] text-[#676d83] text-base">
              СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ
              ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ
            </p>
          </li>
        </ul>
      </div>
      <div
        className="flex relative w-full p-4 mt-20 h-[600px]"
        style={{
          backgroundImage:
            'url("https://www.dezinfeksiyatashkent.uz/assets/hh-32dbdc9d.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-1/2"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="z-0 mt-20 text-white">
          <h1 data-aos="fade-left" className="max-w-[558px] text-[40px] font-bold mb-5 leading-[48px]">
            Клапа ва зарарли ҳашорот енди йўқ деб ҳисобланг !!!
          </h1>
          <p data-aos="fade-left" className="max-w-[310px] text-base leading-6 mb-14">
            Бизнинг кўп йиллардан бери ўз фаолиятини олиб келаётган компаниямиз.
            Мижозларимиз биздан мамнун
          </p>
          <a data-aos="fade-left" href="tel:+998770770403" className="flex">
            {" "}
            <button className="text-2xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-8 rounded-3xl">
              Богланиш
            </button>
          </a>
        </div>
      </div>
      <div className="p-4 mt-24">
        <div>
          <h1 data-aos="zoom-in" className="text-[#020c31] text-[52px] font-bold mb-4 leading-[64px]">
            Хизматлар
          </h1>
          <p data-aos="zoom-in" className="max-w-[335px] text-[#666] text-lg leading-6">
            Биз сизга самарали ва кафолатли хизмат тақдим етамиз.
          </p>
        </div>
        <ul className="w-full mt-10 space-y-10">
          <li data-aos="fade-right"  className="flex py-3 border-2 px-14 rounded-2xl border-[#383434] justify-between items-center">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dizinfeksiya-52660f2d.png"
              alt="virus"
              width={300}
              height={300}
            />
            <div className="max-w-[900px]">
              <h1 className="text-[#020c31] text-[32px] font-bold mb-3">
                Дезинфексия - зарарли микро организмларни йўқ қилиш
              </h1>
              <p className="text-[#495157] text-base font-base">
                Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва
                касалликларга олиб келиши мумкин бўлган хавфли
                микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни
                моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён
                атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни
                ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак.
              </p>
            </div>
          </li>
          <li data-aos="fade-right" className="flex py-3 border-2 px-14 rounded-2xl border-[#383434] justify-between items-center">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dezinyeksiya-bea8e70f.png"
              alt="virus"
              width={300}
              height={300}
            />
            <div className="max-w-[900px]">
              <h1 className="text-[#020c31] text-[32px] font-bold mb-3">
                Дезинсексия - ҳашаротларни йўқ қилиш
              </h1>
              <p className="text-[#495157] text-base font-base">
                Кўп одамлар биринчи навбатда 'дезинфестатсия' сўзини исталмаган
                қўшниларидан - чойшаблар, ҳамамбöcеклер, чумолилар ва бошқа
                ҳашаротлардан халос бўлиш ёлини қидирганда дуч келишади.
                Уларнинг ўзлари йўқимсиз ва улар ҳам маълум инфектсия
                ташувчилари. Дезинсексия - бу ҳашаротларни: чивинлар, чивинлар,
                чойшаблар, тараканлар, куя, шомил, қобиқ қўнғизлари, ёғоч
                битлари ва бошқа судралиб юрувчи ва учувчи жонзотларни йўқ
                қилиш.
              </p>
            </div>
          </li>
          <li data-aos="fade-right" className="flex py-3 border-2 px-14 rounded-2xl border-[#383434] justify-between items-center">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/derazatsiya-83b522bf.png"
              alt="virus"
              width={300}
              height={300}
            />
            <div className="max-w-[900px]">
              <h1 className="text-[#020c31] text-[32px] font-bold mb-3">
                Дератизатсия - кемирувчиларни йўқ қилиш.
              </h1>
              <p className="text-[#495157] text-base font-base">
                Тошкентда дератизатсия кемирувчиларни йўқ қилишга қаратилган
                комплекс чора-тадбирларнинг бутун мажмуасидир. Маълумки,
                кемирувчилар жуда қаттиқ жонзотлар бўлиб, улар турли хил хавфли
                таъсирларга дош берадилар. Шунинг учун уларни йўқ қилиш учун бир
                қатор усуллардан фойдаланиш керак. Дератизатсия Тошкент шаҳрида
                кемирувчилар пайдо боʻлган жойларда: коʻп қаватли уйлар,
                омборлар, доʻконлар, умумий овқатланиш корхоналари амалга
                оширилади.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-4 mt-24">
        <h1 data-aos="zoom-in" className="text-[#020c31] text-[52px] font-bold mb-10 leading-[64px]">
          Хизмат тури
        </h1>
        <ul  className="grid grid-cols-3 gap-5">
          <li data-aos="fade-right" className="rounded-xl bg-[#F3F6F6] p-5 relative">
            <h1 className="text-[#020c31] text-[32px] font-bold mb-5">
              КЛАПАЛАР
            </h1>
            <p className="text-[#495157] text-lg font-semibold max-w-[410px] leading-5">
              Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза
              ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли
              ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик
              ноқулайликни қўзғатинг...
            </p>
            <a
              href="tel:+998770770403"
              className="flex items-end justify-end mt-28"
            >
              <button className="text-xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-10 rounded-3xl ">
                Богланиш
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full"
              />
            </a>
          </li>
          <li data-aos="fade-right" className="rounded-xl bg-[#F3F6F6] p-5 relative">
            <h1 className="text-[#020c31] text-[32px] font-bold mb-5">
              ТАРАКАНЛАР
            </h1>
            <p className="text-[#495157] text-lg font-semibold max-w-[410px] leading-5">
              Улар патогенларни олиб юрадилар. Улар ёриқларда, таглик тагида,
              мебел орқасида, ҳаммом остида, шкафлар остида ва ҳоказоларда
              яшайдилар. Улар озиқ-овқат, маиший чиқиндилар, чарм буюмлар ва
              қоғоз билан озиқланадилар.
            </p>
            <a
              href="tel:+998770770403"
              className="flex items-end justify-end mt-28"
            >
              <button className="text-xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-10 rounded-3xl ">
                Богланиш
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full"
              />
            </a>
          </li>
          <li data-aos="fade-right" className="rounded-xl bg-[#F3F6F6] p-5 relative">
            <h1 className="text-[#020c31] text-[32px] font-bold mb-5">ЧАЁН</h1>
            <p className="text-[#495157] text-lg font-semibold max-w-[410px] leading-5">
              Ҳашаротлар ва арахнидлар билан озиқланадиган иссиқликни яхши
              кўрадиган жонзотлар. Улар омборларда ва уйларда яшашлари мумкин,
              лекин кўпинча улар ёғоч биноларда топилади ...
            </p>
            <a
              href="tel:+998770770403"
              className="flex items-end justify-end mt-28"
            >
              <button className="text-xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-10 rounded-3xl ">
                Богланиш
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full"
              />
            </a>
          </li>
          <li data-aos="fade-right" className="rounded-xl bg-[#F3F6F6] p-5 relative">
            <h1 className="text-[#020c31] text-[32px] font-bold mb-5">
              КЕМИРУВЧИЛАР
            </h1>
            <p className="text-[#495157] text-lg font-semibold max-w-[410px] leading-5">
              Енг кенг тарқалган каламушлар ва сичқонлар. Улар патогенларни олиб
              юради, барча сиртларда ишлайди, девор ва шифтларда ўтиш жойларини
              яратади, структуранинг ишончлилигини пасайтиради. Улар озиқ-овқат
              ва маиший чиқиндилар билан озиқланади...
            </p>
            <a
              href="tel:+998770770403"
              className="flex items-end justify-end mt-28"
            >
              <button className="text-xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-10 rounded-3xl ">
                Богланиш
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full"
              />
            </a>
          </li>
          <li data-aos="fade-right" className="rounded-xl bg-[#F3F6F6] p-5 relative">
            <h1 className="text-[#020c31] text-[32px] font-bold mb-5">
              БУРГАЛАР
            </h1>
            <p className="text-[#495157] text-lg font-semibold max-w-[410px] leading-5">
              Улар уй ҳайвонлари танасига кириб, қўшнилардан кўчиб кетишади.
              Улар юмшоқ мебеллар, кўрпа-тўшаклар, гиламлар, юмшоқ ўйинчоқлар,
              таглик тагида ва дераза ва ешик ромларида яшайдилар. Улар одамлар
              ва ҳайвонларнинг қони билан озиқланади. Улар касалликларга олиб
              келади ...
            </p>
            <a
              href="tel:+998770770403"
              className="flex items-end justify-end mt-28"
            >
              <button className="text-xl font-medium bg-[rgb(37,33,251)] text-white py-3 px-10 rounded-3xl ">
                Богланиш
              </button>
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg"
                alt="klapa"
                width={130}
                height={130}
                className="absolute rounded-full"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4 mt-24 ">
        <div className="flex py-4 border-t-2">
          <div className="text-[#020c31] text-[48px] w-[40%] font-bold leading-[48px] mt-3">
            ФАҚ
          </div>
          <ul className="mt-4 space-y-10 w-[100%]">
            <li className="border-b-2 ">
              <button
                className="flex items-center justify-between w-full mb-5"
                onClick={() => setFaq(1)}
              >
                <h1 className="text-[#676d83] text-[30px] font-semibold leading-8 ">
                  Зараркунандаларни йўқ қилиш қандай амалга оширилади?
                </h1>
                <div className="w-[50px] h-[50px] bg-[#f2f2f2] rounded-full flex items-center justify-center px-2 mr-3">
                  <IoIosArrowDown className="text-[35px]" />
                </div>
              </button>
              <p
                className={`${
                  faq != 1 && "hidden"
                } text-[#676d83] text-2xl leading-8 pb-10 pr-3`}
              >
                Махсус асбоб-ускуналар ёрдамида инсектитсидлар аерозолли туманга
                айланади ва девор қоғози, деворлар ва тахта плиталари орасидаги
                енг кичик бўшлиқларга, кўзга кўринмас ҳашаротлар учун потентсиал
                'яшириш жойлари' га киради.
              </p>
            </li>
            <li className="border-b-2 ">
              <button
                className="flex items-center justify-between w-full mb-5"
                onClick={() => setFaq(2)}
              >
                <h1 className="text-[#676d83] text-[30px] font-semibold leading-8 ">
                  Сиз фойдаланадиган дорилар хавфлими?
                </h1>
                <div className="w-[50px] h-[50px] bg-[#f2f2f2] rounded-full flex items-center justify-center px-2 mr-3">
                  <IoIosArrowDown className="text-[35px]" />
                </div>
              </button>
              <p
                className={`${
                  faq != 2 && "hidden"
                } text-[#676d83] text-2xl leading-8 pb-10 pr-3`}
              >
                Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли
                емас. Аммо даволанишдан кейин хонани 40 дақиқа давомида
                вентилятсия қилиш керак.
              </p>
            </li>
            <li className="border-b-2 ">
              <button
                className="flex items-center justify-between w-full mb-5"
                onClick={() => setFaq(3)}
              >
                <h1 className="text-[#676d83] text-[30px] font-semibold leading-8 text-start ">
                  Менга уйимни даволанишга тайёрлашнинг қандайдир усули керакми?
                </h1>
                <div className="w-[50px] h-[50px] bg-[#f2f2f2] rounded-full flex items-center justify-center px-2 mr-3">
                  <IoIosArrowDown className="text-[35px]" />
                </div>
              </button>
              <p
                className={`${
                  faq != 3 && "hidden"
                } text-[#676d83] text-2xl leading-8 pb-10 pr-3`}
              >
                Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия
                қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия
                қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат йўқ.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-4 mt-24">
        <div className="w-full relative rounded-2xl h-[550px] flex items-center pl-32 bg-[radial-gradient(333.17%_80.94%_at_51.32%_69.21%,_#3DA0FC_0%,_rgba(2,_227,_214,_0.2)_100%)]">
          <div data-aos="fade-right" className="bg-white w-[456px] py-2 px-5 h-[385px] rounded-xl flex flex-col gap-10">
            <h1 className="text-[#242825] text-[35px] leading-[40px] font-bold">
              Малумотингизни қолдиринг
            </h1>
            <form onSubmit={SendMessage} className="flex flex-col gap-10">
              <input
                type="text"
                id="name"
                placeholder="Исмингиз"
                className="w-full px-4 h-[50px] bg-[#F2F2F2] text-[#242825] rounded-lg text-base leading-6 font-medium"
              />
              <input
                type="text"
                id="phone"
                placeholder="+998-90-123-45-67"
                className="w-full px-4 h-[50px] bg-[#F2F2F2] text-[#242825] rounded-lg text-base leading-6 font-medium"
              />
              <button type="submit" className="w-full px-4 h-[50px] bg-[#242825] text-white text-base font-medium rounded-lg">
                Юбориш
              </button>
            </form>
          </div>
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png"
            alt=""
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="mt-24 mb-40 border-t-2">
        <div className="flex gap-32 p-4 pt-20">
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
            alt="logo"
            width={300}
            height={90}
          />
          <div data-aos="fade-right" className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="flex items-center justify-center px-1 py-[6px] border rounded-lg">
                <IoLocationOutline className="text-[20px]"/>
              </span>
              <p className="text-[#242825cc] text-base font-medium">Ўзбекистон, Тошкент шаҳри</p>
              <FiArrowUpRight className="text-xl"/>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="flex items-center justify-center px-1 py-[6px] border rounded-lg">
                <FiPhone className="text-[20px]"/>
              </span>
              <p className="text-[#242825cc] text-base font-medium">+998 99 119 99 33</p>
              <FiArrowUpRight className="text-xl"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
