'use client';

import { useState } from 'react';
import { fetchPokemonDetails } from '@/lib/api';
import { useGame } from '@/components/context/GameContext';
import Mercure3D from '@/components/Mercure3D';
import CaptureView from '@/components/CaptureView';
import PokemonCard from '@/components/PokemonCard';

// 20 Pokémon logiques pour Mercure
const planetPokemons = [
  'charmander','vulpix','growlithe','ponyta','rapidash',
  'magmar','flareon','geodude','graveler','golem',
  'onix','rhydon','kabuto','kabutops','omanyte',
  'omastar','aerodactyl','sandshrew','sandslash','diglett'
];

export default function MercurePage() {
  const [mode, setMode] = useState('3d'); 
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { catchPokemon } = useGame();

  // Quand Mercure3D détecte un point
  const handlePointIntersect = async (index) => {
    setMode('capture');
    const name = planetPokemons[index];
    try {
      const details = await fetchPokemonDetails(name);
      setSelectedPokemon(details);
    } catch (err) {
      console.error(err);
      setMode('3d');
    }
  };

  // Quand la capture est terminée avec succès
  const handleCaptureSuccess = () => {
    if (selectedPokemon) {
      catchPokemon(selectedPokemon);
      setMode('card');
    } else {
      setMode('3d');
    }
  };

  // Si on annule la capture
  const handleCancel = () => {
    setMode('3d');
  };

  // Fermeture de la carte
  const handleCloseCard = () => {
    setMode('3d');
    setSelectedPokemon(null);
  };

  return (
    <div className="w-screen h-screen">
      {mode === '3d' && (
        <Mercure3D
          pointCount={planetPokemons.length}
          onPointIntersect={handlePointIntersect}
        />
      )}

      {mode === 'capture' && selectedPokemon && (
        <CaptureView
          pokemon={selectedPokemon}
          onSuccess={handleCaptureSuccess}
          onCancel={handleCancel}
        />
      )}

      {mode === 'card' && selectedPokemon && (
        <PokemonCard
          pokemon={selectedPokemon}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
}
