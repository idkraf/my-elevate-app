import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import PropertyCard from "@/components/PropertyCard";
import { Timestamp } from "firebase/firestore";

type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  priceFrom: number;
  priceTo: number;
  thumbnail: string;
  gallery: string[];
  features: string[];
  status: string;
  createdAt: Timestamp;
};


type Settings = {
  siteTitle: string;
  heroImage: string;
  contactEmail: string;
  socials: {
    facebook: string;
    instagram: string;
  };
};

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    async function fetchData() {
      // Fetch properties
      const propsSnapshot = await getDocs(collection(db, "properties"));
      setProperties(
        propsSnapshot.docs.map((doc) => {
          const data = doc.data() as Property;
          return { ...data, id: doc.id };
        }),
      );

      // Fetch settings
      const settingsSnapshot = await getDocs(collection(db, "settings"));
      if (!settingsSnapshot.empty) {
        setSettings(settingsSnapshot.docs[0].data() as Settings);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {settings?.heroImage && (
        <section
          className="h-[500px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${settings.heroImage})` }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-black/50 px-4 py-2 rounded">
            {settings.siteTitle}
          </h1>
        </section>
      )}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Our Latest Properties</h2>
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
