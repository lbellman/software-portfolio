import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MyFriendsArtSection() {
  return (
    <section className="relative w-full py-10 grid md:grid-cols-2 grid-cols-1 ">
      {/* Left side: title, tags, description, CTA */}
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col flex-nowrap  px-16">
          <Image
            src="/my-friends-art/title-black.svg"
            alt="My Friends Art logo"
            width={200}
            height={56}
            className="h-12 w-auto object-contain object-left mb-4 md:h-14 "
            priority
          />

          <div className="flex items-center gap-5">
            <Image
              src="/react-logo.png"
              alt="React"
              width={64}
              height={64}
              className="h-8 w-8 object-contain md:h-14 md:w-18"
            />
            <Image
              src="/supabase-logo.svg"
              alt="Supabase"
              width={64}
              height={64}
              className="h-10 w-20 object-contain md:h-14 md:w-24"
            />
            <Image
              src="/tailwind-logo.svg"
              alt="Tailwind CSS"
              width={64}
              height={64}
              className="h-10 w-24 object-contain md:h-14 md:w-26"
            />
            <Image
              src="/stripe-logo.svg"
              alt="Stripe"
              width={64}
              height={64}
              className="h-10 w-20 object-contain md:h-14 md:w-14"
            />
          </div>

          <p className="mt-4 mb-6">
            My Friend&apos;s Art is a{" "}
            <span className="text-primary font-semibold">
              full-stack e-commerce platform
            </span>{" "}
            for showcasing and selling art prints from independent artists. This
            application is built on a React/Typescript/Tailwind frontend, and a
            Supabase backend with a Stripe integration to handle payments.{" "}
          </p>
          <div className="mb-4 ">
            <Button asChild>
              <Link
                href={"/projects/my-friends-art"}
                className="inline-flex items-center gap-2"
              >
                View Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right side: fixed-size container; image content scrolls inside it */}

        <section className="w-full flex justify-center ">
          <div className="w-full overflow-hidden">
            <Image
              src="/my-friends-art/collage.webp"
              alt="My Friend's Art — marketplace collage"
              width={1600}
              height={900}
              className="w-full h-auto object-cover object-center"
              sizes="(min-width: 1280px) 70vw, (min-width: 768px) 80vw, 100vw"
            />
          </div>
        </section>
    </section>
  );
}
