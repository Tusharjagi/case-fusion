import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-purple-700 bg-purple-900/75 backdrop-blur-lg transition-all px-10">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-purple-700">
          <Link href="/" className="flex z-40 font-semibold text-white">
            case<span className="text-purple-300">fusion</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-white border-purple-300 hover:bg-purple-700",
                  })}
                >
                  Sign out
                </Link>

                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                      className: "text-white border-purple-300 hover:bg-purple-700",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1 text-white border-purple-300 hover:bg-purple-700",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5 text-purple-300" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-white border-purple-300 hover:bg-purple-700",
                  })}
                >
                  Sign up
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-white border-purple-300 hover:bg-purple-700",
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-purple-700 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1 text-white border-purple-300 hover:bg-purple-700",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5 text-purple-300" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
