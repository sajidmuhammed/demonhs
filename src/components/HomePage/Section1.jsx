import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

const Section1 = () => {
  return (
    <>
      <div className="relative">
        <section
          style={{
            backgroundImage:
              'url("https://assets.nhs.uk/nhsuk-cms/images/test5_4nG3bKJ.width-1000.png")',
          }}
          className="bg-cover bg-center w-full h-[500px] md:h-[400px] px-4 md:px-16 lg:px-32 pt-10"
        >
          <div className="max-w-xl bg-[#005eb8] text-white p-6 md:p-10">
            <p className="text-xl md:text-2xl lg:text-3xl opacity-80 font-bold">
              NHS website for England
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Find information and services to
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              help you manage your health
            </p>
          </div>
        </section>

        <div
          className="relative md:absolute md:top-[300px] md:left-[70px] lg:left-[300px] px-4 md:px-0 z-10"
        >
          <div className="flex flex-col my-[30px] md:flex-row gap-4 max-w-4xl md:mx-auto md:my-0">
            <div className="bg-white p-6 w-full md:w-[48%] shadow-md">
              <Link
                className="text-[#005eb8] font-bold text-xl md:text-2xl underline"
                href="https://google.com"
              >
                Health A to Z
              </Link>
              <p className="pt-4 text-sm md:text-base font-semibold">
                Find out about conditions, symptoms, medicines,
                <br />
                tests and treatments, including when to get help
              </p>
            </div>

            <div className="bg-white p-6 w-full md:w-[48%] shadow-md">
              <Link
                className="text-[#005eb8] font-bold text-xl md:text-2xl underline"
                href="https://google.com"
              >
                Health A to Z
              </Link>
              <p className="pt-4 text-sm md:text-base font-semibold">
                Find out about conditions, symptoms, medicines,
                <br />
                tests and treatments, including when to get help
              </p>
            </div>
          </div>
        </div>

      </div>

      <section className="w-full pt-12 md:pt-[160px] pb-12 px-4 md:px-16 lg:px-32 bg-[#f0f4f5]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-10">
          Manage your health
        </h1>
        <div className="space-y-4">
          {[
            "View your GP health record",
            "Order a repeat prescription",
            "View your test results",
            "Appointments and bookings at your GP surgery",
            "How to register with a GP surgery",
            "Find your NHS number",
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <BiRightArrowCircle className="w-6 h-6 md:w-8 md:h-8 mr-3 text-white bg-green-500 rounded-full flex-shrink-0" />
              <Link
                href="https://google.com"
                className="text-[#005eb8] font-semibold text-base md:text-lg lg:text-2xl hover:underline transition duration-200"
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section1;
