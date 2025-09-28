import { useState } from "react";
import type { ReactNode } from "react";
import { Trophy, Dice5, Coins, User, Star, Gift } from "lucide-react";
import "./styles/styles.css";

interface Game {
  id: number;
  name: string;
  desc: string;
  icon: ReactNode;
}

export default function LuckySim() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  const games: Game[] = [
    { id: 1, name: "🎰 Slots", desc: "Spin the reels and chase big wins!", icon: <Coins /> },
    { id: 2, name: "🎲 Roulette", desc: "Place your bets and spin the wheel of fortune.", icon: <Dice5 /> },
    { id: 3, name: "🃏 Blackjack", desc: "Beat the dealer and aim for 21.", icon: <Trophy /> },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1
          className="logo"
          onClick={() => {
            setSelectedGame(null);
            setShowProfile(false);
          }}
        >
          LuckySim
        </h1>
        <nav className="nav">
          <button
            className="btn-ghost"
            onClick={() => {
              setShowProfile(true);
              setSelectedGame(null);
            }}
          >
            <User size={20} /> Profile
          </button>
        </nav>
      </header>

      <main className="main-content">
        {/* Sidebar Ads */}
        <aside className="sidebar">
          <div className="ad-card">
            <h3><Star size={18} /> VIP Bonus</h3>
            <p>Join now and get free spins!</p>
          </div>
          <div className="ad-card">
            <h3><Gift size={18} /> Daily Rewards</h3>
            <p>Come back every day for free coins.</p>
          </div>
          <div className="ad-card">
            <h3>🔥 Hot Games</h3>
            <p>Slots, Roulette, and Blackjack trending now!</p>
          </div>
        </aside>


        <section className="content">
          {/* Hero */}
          {!selectedGame && !showProfile && (
            <div className="hero">
              <h2>Welcome to LuckySim 🎉</h2>
              <p>Enjoy a casino-like experience without real money risk.</p>
            </div>
          )}

          {/* Game catalog */}
          {!selectedGame && !showProfile && (
            <div className="grid">
              {games.map((game) => (
                <div key={game.id} className="card" onClick={() => setSelectedGame(game)}>
                  <div className="icon">{game.icon}</div>
                  <h3>{game.name}</h3>
                  <p>{game.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Game preview */}
          {selectedGame && !showProfile && (
            <div className="preview">
              <h2>{selectedGame.name}</h2>
              <p>{selectedGame.desc}</p>
              <div className="game-demo">🎮 Game demo screen...</div>
              <button className="btn" onClick={() => setSelectedGame(null)}>
                🔙 Back
              </button>
            </div>
          )}

          {/* Profile */}
          {showProfile && (
            <div className="profile">
              <h2>👤 Player Profile</h2>
              <p>
                Username: <b>Guest123</b>
              </p>
              <p>
                Level: <b>5</b>
              </p>
              <p>
                Coins: <b>2500</b>
              </p>

              <h3>🏆 Achievements:</h3>
              <ul>
                <li>🎰 First spin in Slots</li>
                <li>🎲 10 rounds of Roulette</li>
                <li>🃏 Beat the dealer in Blackjack</li>
              </ul>

              <button className="btn" onClick={() => setShowProfile(false)}>
                🔙 Back to Home
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 LuckySim. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
