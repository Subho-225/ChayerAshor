import React from "react";

export default function MemoryMapPage() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/MINDMAPPRATYUSH.png')" }}>
      <div className="backdrop-blur-sm bg-white/80 min-h-screen px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Chayer Ashor: Where It All Began</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-600 shadow-xl p-4">
            <h2 className="text-2xl font-semibold mb-2">Sitanath Bose Lane</h2>
            <p className="mb-2 italic">Home of Tuition + Trauma</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Where Subhankar became CEO of gossip</li>
              <li>Srijit's love life was reviewed</li>
              <li>Pratyush earned the codename: Jai Mahakal</li>
              <li>Entrance exam pep talks that turned into biryani plans</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 shadow-xl p-4">
            <h2 className="text-2xl font-semibold mb-2">Chayer Ashor</h2>
            <p className="mb-2 italic">The Tea Stall of Destiny</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Where "Tui Ki Yiarki Marchis?" was born</li>
              <li>Evenings filled with tea and truth bombs</li>
              <li>Official headquarters of eternal adda</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 shadow-xl p-4">
            <h2 className="text-2xl font-semibold mb-2">Babudanga Launch Ghat</h2>
            <p className="mb-2 italic">Where the Bros Launched Feelings</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Launch to Hedua, but mostly sat & stared at sunsets</li>
              <li>One of the best single-boy evenings ever</li>
              <li>A memory that hits different every time</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 shadow-xl p-4">
            <h2 className="text-2xl font-semibold mb-2">Hedua Park</h2>
            <p className="mb-2 italic">Rolls, Pujas & Pure Freedom</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Bunked classes just to vibe</li>
              <li>Ate rolls like kings</li>
              <li>Once visited = forever on the map</li>
            </ul>
          </div>
        </section>

        <div className="text-center mt-12 text-lg italic">Bondhutter Shopoth — Since 2023</div>
      </div>
    </div>
  );
}