export default function Hero() {
  return (
    <section
      className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl font-bold">Elevate Property Group</h1>
        <p className="mt-4 text-lg">Luxury property developments across the UK</p>
      </div>
    </section>
  )
}
