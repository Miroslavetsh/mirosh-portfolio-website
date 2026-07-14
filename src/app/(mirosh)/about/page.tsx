import AboutMe from "@/components/Landing/AboutMe/AboutMe";
import Header from "@/components/Landing/Header/Header";
import Preview from "@/components/Landing/Preview/Preview";

export default async function Profile() {
  return (
    <div className="page">
      <Header />
      <div className="main">
        <Preview />
        <AboutMe />
      </div>
    </div>
  );
}
