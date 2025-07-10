import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

export default function PropertiesPage() {
  // replace with real data later
  const properties = [
    {
      id: "prioryHouse",
      title: "Priory House",
      location: "Birmingham, UK",
      priceFrom: 250000,
      thumbnail: "/images/prioryhouse.jpeg"
    }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Properties</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
