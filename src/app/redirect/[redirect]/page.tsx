"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function RedirectPage() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const email = Cookies.get("email");
    const redirectRoute = pathname.split("/")[2]; // Get the route part, e.g., /auth/reg

    setTimeout(() => setLoading(false), 9000000); // Change 2000 to the desired loading duration

    const pagesWithRegistration = [
      "admin",
      "admin/users",
      "admin/roles",
      "admin/permissions",
      "admin/logs",
      "admin/settings",
      "profile",
      "profile/change",
      "orders",
    ];

    if (pagesWithRegistration.includes(redirectRoute) && !email) {
      router.replace("/auth/reg");
    } else {
      if (redirectRoute === "reg" || redirectRoute === "login") {
        router.replace(`/auth/${redirectRoute}`);
      } else if (redirectRoute === "change") {
        router.replace(`/profile/${redirectRoute}`);
      } else {
        router.replace(`/${redirectRoute}`);
      }
    }
  }, [router, pathname]);

  return (
    <div
      className={`h-screen w-full flex items-center justify-center bg-black ${loading ? "overlay" : ""}`}
    >
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="loading-spinner"></div>
          <style jsx>{`
            .loading-spinner {
              border: 4px solid rgba(255, 255, 255, 0.3);
              border-top: 4px solid #ffffff;
              border-radius: 50%;
              width: 48px;
              height: 48px;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .overlay {
              background-color: rgba(0, 0, 0, 0.7);
            }
          `}</style>
        </div>
      ) : null}
    </div>
  );
}
