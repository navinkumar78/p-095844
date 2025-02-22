export const Features = () => {
  return (
    <section className="items-stretch bg-[#F2F2F7] flex w-full flex-col overflow-hidden px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col overflow-hidden items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
          <span className="text-base text-[#5856d6] font-semibold whitespace-nowrap">
            Recover
          </span>
          <h2 className="text-[#633B48] text-5xl font-bold leading-[1.2] mt-4 max-md:max-w-full max-md:text-[40px]">
            Your Lost Items Made Easy
          </h2>
        </div>
        <p className="text-black text-lg font-normal leading-[27px] flex-1 shrink basis-[0%] max-md:max-w-full">
          Our platform simplifies the process of reporting lost items at railway
          stations. With just a few clicks, you can notify security personnel
          and share details with the community. Together, we can increase the
          chances of reuniting lost belongings with their owners.
        </p>
      </div>
      <div className="w-full text-black mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-[40px_48px] flex-wrap max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12"
              alt="Report icon"
            />
            <h3 className="text-[32px] font-bold leading-[42px] mt-6">
              Report Lost Items Effortlessly
            </h3>
            <p className="text-base font-normal mt-6">
              Easily submit details about your lost items.
            </p>
          </div>
          <div className="min-w-60 flex-1 shrink basis-[0%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/e0f1660a5f1afb1642e03a6194993c066aec3fe6a976b4e8d4e86d28b5a58387?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12"
              alt="Browse icon"
            />
            <h3 className="text-[32px] font-bold leading-[42px] mt-6">
              Browse Found Items in Your Area
            </h3>
            <p className="text-base font-normal mt-6">
              Check our listings to see if your item is found.
            </p>
          </div>
          <div className="min-w-60 flex-1 shrink basis-[0%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/513997e4ebf8646252b3115f9dc1d2a6bdcddb1974d092193a8df12831a19864?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12"
              alt="Guide icon"
            />
            <h3 className="text-[32px] font-bold leading-[42px] mt-6">
              How It Works: A Simple Guide
            </h3>
            <p className="text-base font-normal mt-6">
              Follow our easy steps to report or find items.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
