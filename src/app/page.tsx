import HomePage from "@/modules/home/template";
import Footer from "@/modules/layout/components/footer";
import Header from "@/modules/layout/components/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
