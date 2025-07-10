import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          We are Elevate Property Group — delivering luxury apartments and vibrant communities across the UK.
        </p>
      </main>
      <Footer />
    </>
  );
}
