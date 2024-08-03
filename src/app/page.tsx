import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Check, Star } from "lucide-react";

import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-purple-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 lg:pr-40 lg:pl-40">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-purple-50/50 from-purple-50 h-28" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Design Your Unique <span className="bg-purple-600 px-2 text-white">Phone Case</span> Today
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Personalize your device with a custom case that tells your story. At CaseMaster, we bring your memories
                to life with our high-quality, personalized phone cases.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-purple-600" />
                    Durable and long-lasting materials
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-purple-600" />1 year print warranty
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-purple-600" />
                    Supports latest Android and iPhone models
                  </li>
                </div>
              </ul>

              <div
                className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5"
                id="user-circle-images"
              >
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-purple-100"
                    src="/users/user-1.jpeg"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-purple-100"
                    src="/users/user-2.jpeg"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-purple-100"
                    src="/users/user-3.jpeg"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-purple-100"
                    src="/users/user-4.jpeg"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-purple-100"
                    src="/users/user-5.jpeg"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt="your image"
                width={100}
                height={100}
              />
              <Image
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="line"
                width={50}
                height={50}
              />
              <Phone className="w-64" imgSrc="/testimonials/micro-tiny-boy.png" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="py-24 lg:py-52">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-10">
            <div className="order-1 md:order-none m-4 lg:m-24">
              <Phone className="w-96" imgSrc="/testimonials/create-a-seamless.jpeg" />
            </div>
            <div className="flex flex-col justify-center gap-8 px-4 lg:px-0">
              <h2 className="tracking-tight text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Take Your <span className="bg-purple-600 px-2 text-white">Design</span> To The Next Level
              </h2>
              <p className="leading-7 text-balance">
                {`
                Our easy-to-use design tool allows you to create custom phone cases with your own images, designs, and
                text. Whether it's a cherished photo or a creative graphic, you can make your case truly one-of-a-kind.
                `}
              </p>
              <div className="flex justify-start">
                <Link href="/configure/upload" className={buttonVariants({ size: "lg", variant: "outline" })}>
                  Customize Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="flex justify-center items-center">
        <Reviews />
      </section>
      <section className="bg-purple-100 grainy-dark py-24" id="what-customer-are-saying">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 lg:pr-40 lg:pl-40 ">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 ">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.Underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-purple-500" />
              </span>{" "}
              say
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  {`
                  "The case feels durable and I even got a compliment on the design. Had the case for two and a half
                  months now and <span className="p-0.5 bg-purple-800 text-white">the image is super clear</span>, on
                  the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it."
                  `}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/testimonials/Anshika.jpeg"
                  alt="user"
                  height={500}
                  width={500}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Anshika</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                    <p className="text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  {`
                  "Incredible, the case turned out exactly how I wanted it to look. The colors are vibrant and the
                  material is top-notch. Delivery was fast and the product was well-packaged. Highly recommend!"
                  `}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/testimonials/preeti.jpeg"
                  alt="user"
                  height={500}
                  width={500}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Preeti</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                    <p className="text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  {`
                  "Absolutely loved my customized phone case! It’s very well-made and the print quality is superb.
                  Customer service was also very helpful when I had questions about my order."
                  `}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/testimonials/rahul.jpeg"
                  alt="user"
                  height={500}
                  width={500}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Rahul Jain</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                    <p className="text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  {`
                  "This is my third purchase from CaseMaster, and I am consistently impressed with the quality and
                  service. The phone cases are not only stylish but also protect my phone very well."
                  `}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/testimonials/abhishek.jpeg"
                  alt="user"
                  height={500}
                  width={500}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Abhishek</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                    <p className="text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
