import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogDetailPage() {
  // static content
  const post = { title: "New Project Launch", content: "Detailed content here..." };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.content}</p>
      </main>
      <Footer />
    </>
  );
}
