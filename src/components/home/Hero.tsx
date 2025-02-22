import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="bg-[rgba(222,222,255,1)] flex w-full items-center gap-[40px_80px] overflow-hidden flex-wrap px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h1 className="text-[#916400] text-[56px] font-bold leading-[67px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            When recovering your items becomes child's play!
          </h1>
          <p className="text-[#5856d6] text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
            Lost or found something? Let us help you
          </p>
        </div>
        <div className="flex gap-4 text-base font-normal whitespace-nowrap mt-8">
          <Link
            to="/report"
            className="self-stretch border border-[color:var(--Colors-Indigo,#5856D6)] bg-[#5856D6] gap-2 text-white px-6 py-3 border-solid hover:bg-[#4745c0] transition-colors max-md:px-5"
          >
            Report
          </Link>
          <Link
            to="/browse"
            className="self-stretch border border-[color:var(--Colors-Indigo,#5856D6)] gap-2 text-black px-6 py-3 border-solid hover:bg-gray-50 transition-colors max-md:px-5"
          >
            Browse
          </Link>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/78d8b4351afcc6195c67d806992fb2a83d5deb60546e4d4ada97d6576dbdfbab?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/78d8b4351afcc6195c67d806992fb2a83d5deb60546e4d4ada97d6576dbdfbab?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/78d8b4351afcc6195c67d806992fb2a83d5deb60546e4d4ada97d6576dbdfbab?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/78d8b4351afcc6195c67d806992fb2a83d5deb60546e4d4ada97d6576dbdfbab?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/78d8b4351afcc6195c67d806992fb2a83d5deb60546e4d4ada97d6576dbdfbab?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/78d8b4351afcc6195c67d806992fb2a83d5deb60546e4d4ada97d6576dbdfbab?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/78d8b4351afcc6195c67d806992fb2a83d5deb60546e4d4ada97d6576dbdfbab?placeholderIfAbsent=true&width=2000 2000w"
        className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto rounded-[30px] max-md:max-w-full"
        alt="Hero illustration"
      />
    </section>
  );
};
