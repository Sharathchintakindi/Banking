import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Andrian", lastName: "jsm" };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        </div>
        <div className="absolute top-16 right-10">
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
