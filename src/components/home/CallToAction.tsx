import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="items-center bg-black flex w-full flex-col overflow-hidden justify-center px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-[768px] max-w-full flex-col items-stretch">
        <div className="w-full text-white text-center max-md:max-w-full">
          <h2 className="text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
            Lost Something? We Can Help!
          </h2>
          <p className="text-lg font-normal mt-6 max-md:max-w-full">
            Join our community to report lost or found items easily and
            efficiently.
          </p>
        </div>
        <div className="self-center flex gap-4 text-base text-black font-normal mt-8">
          <Link
            to="/signup"
            className="self-stretch bg-white border gap-2 px-6 py-3 border-white border-solid hover:bg-gray-100 transition-colors max-md:px-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};
