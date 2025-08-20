'use client';

import Link from 'next/link';
import { useGame } from '@/components/context/GameContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CollectionPage() {
  const { caughtPokemons } = useGame();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 tracking-wide">Ma Collection</h1>

      {caughtPokemons.length === 0 ? (
        <p className="text-center text-gray-400 italic">Aucun Pokémon capturé pour le moment.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {caughtPokemons.map((poke) => (
            <div
              key={poke.id}
              className="relative bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition p-4 rounded-2xl shadow-lg">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 opacity-20" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 relative">
                  <Image
                    src={poke.sprites.other['official-artwork'].front_default}
                    alt={poke.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="capitalize text-xl font-bold mb-2 drop-shadow-lg">{poke.name}</h2>
                <div className="flex space-x-2 mb-4">
                  {poke.types.map(({ type }) => (
                    <span
                      key={type.name}
                      className="px-2 py-1 bg-white bg-opacity-20 text-sm rounded-full capitalize">
                      {type.name}
                    </span>
                  ))}
                </div>
                <div className="w-full text-sm mb-4">
                  <div className="flex justify-between">
                    <span>Taille</span>
                    <span>{poke.height / 10} m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Poids</span>
                    <span>{poke.weight / 10} kg</span>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="font-semibold mb-2">Stats</h3>
                  <div className="space-y-1 text-sm">
                    {poke.stats.map(({ stat, base_stat }) => (
                      <div key={stat.name} className="flex justify-between">
                        <span className="capitalize">{stat.name.replace('-', ' ')}</span>
                        <span>{base_stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: 20 - caughtPokemons.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-2xl p-6 text-gray-600 italic">
              <span className="text-4xl mb-2">?</span>
              <span>Slot vide</span>
            </div>
          ))}
        </div>
      )}

      <footer className="mt-12 flex justify-center">
        <Link
          href="/"
          className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
          ← Retour au système solaire
        </Link>
      </footer>
    </main>
  );
}
