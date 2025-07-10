import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function PropertyDetailPage() {
  // static data for demo
  const property = {
    title: "Priory House",
    description: "Luxury apartments in Birmingham",
    gallery: ["/images/prioryhouse.jpeg"]
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
        <p>{property.description}</p>
        <Gallery images={property.gallery} />
      </main>
      <Footer />
    </>
  );
}
