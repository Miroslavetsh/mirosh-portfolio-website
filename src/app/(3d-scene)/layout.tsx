import Navbar from "@/components/3D/Navbar/Navbar";

export default function Layout3D({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
