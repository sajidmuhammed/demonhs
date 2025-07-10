import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

const NHSServices = () => {
  const boxClasses =
    "w-full bg-[#005eb8] mb-2 py-[11px] px-5 flex justify-between items-center transition-all duration-300 ease-in-out hover:translate-x-1 hover:opacity-50";

  const linkClasses =
    "hover:underline transition duration-200 text-[19px] mr-2 text-white font-bold";

  return (
    <section className="w-full py-[55px] px-4 md:px-16 lg:px-[12%] flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-[60%]">
        <h1 className="font-bold text-3xl md:text-4xl mb-9">NHS services</h1>

        <div className={boxClasses}>
          <Link href="https://google.com" className={linkClasses}>
            Find a pharmacy
          </Link>
          <span className="text-white">{'>'}</span>
        </div>
        <div className={boxClasses}>
          <Link href="https://google.com" className={linkClasses}>
            Find a dentist
          </Link>
          <span className="text-white">{'>'}</span>
        </div>
        <div className={boxClasses}>
          <Link href="https://google.com" className={linkClasses}>
            Find a GP
          </Link>
          <span className="text-white">{'>'}</span>
        </div>
        <div className={boxClasses}>
          <Link href="https://google.com" className={linkClasses}>
            Find NHS talking therapies for anxiety and depression
          </Link>
          <span className="text-white">{'>'}</span>
        </div>

        <div className="flex items-center mt-9">
          <BiRightArrowCircle className="w-8 h-8 mr-3 text-white bg-green-500 rounded-full" />
          <Link
            href="https://google.com"
            className="text-[#005eb8] font-bold text-xl md:text-2xl hover:underline transition duration-200"
          >
            Find other NHS services
          </Link>
        </div>
      </div>

      <div className="bg-[#f0f4f5] w-full max-w-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-9 mt-10 mx-auto">
        <h1 className="font-semibold text-xl md:text-2xl mb-4">Help from NHS 111</h1>
        <p className="text-base md:text-[19px] mb-4">
          If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.
        </p>
        <p className="text-base md:text-[19px] mb-4">
          Go to{" "}
          <Link href="https://111.nhs.uk" className="underline text-blue-400">
            111.nhs.uk
          </Link>{" "}
          or{" "}
          <Link href="tel:111" className="underline text-blue-400">
            Call 111.
          </Link>
        </p>
        <p className="text-sm md:text-[17px]">
          For a life-threatening emergency call 999.
        </p>
      </div>
    </section>
  );
};

export default NHSServices;
