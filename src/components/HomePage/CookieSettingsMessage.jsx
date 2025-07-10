import Link from "next/link";

const CookieSettingsMessage = () => {
  return (
    <div className="w-full bg-[#007f3b] py-2 
                    pl-4 md:pl-[250px] 
                    px-4 
                    ">
      <h1 className="text-white text-[16px] md:text-[19px] leading-tight md:leading-normal">
        You can change your cookie settings at any time using our{" "}
        <Link href="https://google.com" className="underline">
          cookies page.
        </Link>
      </h1>
    </div>
  );
};

export default CookieSettingsMessage;
