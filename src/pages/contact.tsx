import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Email us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
        </p>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder="Your Name" className="border w-full px-3 py-2 rounded" />
          <input type="email" placeholder="Your Email" className="border w-full px-3 py-2 rounded" />
          <textarea placeholder="Your Message" className="border w-full px-3 py-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
