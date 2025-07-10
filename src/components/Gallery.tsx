import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {images.map((src, idx) => (
        <Image key={idx} src={src} alt={`Gallery image ${idx + 1}`} className="rounded-lg w-full object-cover" />
      ))}
    </div>
  );
}
