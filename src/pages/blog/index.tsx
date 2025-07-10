import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  // demo posts
  const posts = [
    { id: "newProjectLaunch", title: "New Project Launch" }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/blog/${post.id}`} className="text-blue-600">{post.title}</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
