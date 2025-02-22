export const Testimonials = () => {
  return (
    <section className="bg-[rgba(238,238,238,1)] flex w-full flex-col overflow-hidden items-stretch justify-center px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full items-center overflow-hidden max-md:max-w-full">
          <div className="self-stretch flex min-w-60 flex-col items-center text-2xl text-black font-bold text-center leading-[34px] w-[1312px] my-auto max-md:max-w-full">
            <blockquote className="w-[768px] max-w-full overflow-hidden max-md:max-w-full">
              "I never thought I'd see my lost bag again, but thanks to this
              platform, it was returned to me within days! The process was
              simple and efficient."
            </blockquote>
          </div>
          <div className="self-stretch flex min-w-60 flex-col items-center w-[1312px] my-auto max-md:max-w-full">
            <div className="flex w-[768px] max-w-full flex-col overflow-hidden items-stretch">
              <blockquote className="text-black text-center text-2xl font-bold leading-[34px] max-md:max-w-full">
                "This service is a lifesaver! I found a wallet and was able to
                return it to its owner quickly and easily."
              </blockquote>
              <div className="self-center flex w-[300px] max-w-full flex-col items-center mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/92012972e0c11778aaea2ed7cf1e32fcad31c338b52ff9e956890cb12efadfff?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/92012972e0c11778aaea2ed7cf1e32fcad31c338b52ff9e956890cb12efadfff?placeholderIfAbsent=true&width=200 200w"
                  className="aspect-[1] object-contain w-14 rounded-[50%]"
                  alt="Testimonial avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
