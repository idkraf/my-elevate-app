import Link from 'next/link'
import Image from 'next/image'

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    priceFrom: number;
    thumbnail: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="block border rounded overflow-hidden hover:shadow-lg transition"
    >
      <Image
        src={property.thumbnail}
        alt={property.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">
          From £{property.priceFrom.toLocaleString("en-GB")}
        </p>
      </div>
    </Link>
  );
}
