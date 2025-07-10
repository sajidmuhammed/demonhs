import Link from "next/link";

const Featured = () => {
  return (
    <section className="w-full bg-[#f0f4f5] px-4 md:px-16 lg:px-[12%] py-[55px]">
      <h1 className="font-bold text-4xl mb-9">Featured</h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        <div className="bg-white px-6 py-10 w-full md:w-[320px] lg:w-[340px] min-h-[220px]">
          <Link
            href="https://google.com"
            className="text-[#005eb8] font-bold text-2xl hover:underline"
          >
            Hay Fever
          </Link>
          <p className="text-[20px] mt-3">
            Find out about hay fever including how to treat it and things you
            can do to help with the symptoms
          </p>
        </div>

        <div className="bg-white px-6 py-10 w-full md:w-[340px] lg:w-[360px] min-h-[220px]">
          <Link
            href="https://google.com"
            className="text-[#005eb8] font-bold text-2xl hover:underline"
          >
            Refer yourself for NHS pregnancy care
          </Link>
          <p className="text-[20px] mt-3">
            Refer yourself to NHS maternity services so you can start your
            pregnancy care with a midwife
          </p>
        </div>

        <div className="bg-white px-6 py-10 w-full md:w-[320px] lg:w-[340px] min-h-[220px]">
          <Link
            href="https://google.com"
            className="text-[#005eb8] font-bold text-2xl hover:underline"
          >
            Hay Fever
          </Link>
          <p className="text-[20px] mt-3">
            Find out about hay fever including how to treat it and things you
            can do to help with the symptoms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
