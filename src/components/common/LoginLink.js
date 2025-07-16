import Link from "next/link";

const LoginLink = ({ href, label }) => (
  <div
    className="bg-white w-[70px] h-[45px] text-center md:w-[130px] md:h-[47px] flex items-center justify-center
      hover:bg-amber-300 text-blue-800 hover:text-white
      transform transition duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg cursor-pointer"
  >
    <Link prefetch={true} href={href} className="text-[10px] md:text-[15px] tracking-widest">
      {label}
    </Link>
  </div>
);


export default LoginLink;