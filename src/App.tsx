import { useState } from "react";
import type { ReactNode } from "react";
import {
  Trophy,
  Dice5,
  Coins,
  User,
  Star,
  Gift,
  Gamepad2,
  Rocket,
  Diamond,
  Target,
  Monitor
} from "lucide-react";
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
    { id: 1, name: "Slots", desc: "Spin the reels and chase big wins!", icon: <Coins /> },
    { id: 2, name: "Roulette", desc: "Place your bets and spin the wheel of fortune.", icon: <Dice5 /> },
    { id: 3, name: "Blackjack", desc: "Beat the dealer and aim for 21.", icon: <Trophy /> },
    { id: 4, name: "Wheel of Fortune", desc: "Spin the colorful prize wheel.", icon: <Gamepad2 /> },
    { id: 5, name: "Poker", desc: "Bluff, bet, and win big with poker hands.", icon: <Diamond /> },
    { id: 6, name: "Rocket", desc: "Watch the rocket grow and cash out in time!", icon: <Rocket /> },
    { id: 7, name: "Dice", desc: "Roll the dice and test your luck.", icon: <Target /> },
    { id: 8, name: "Esports", desc: "Bet on your favorite esports teams.", icon: <Monitor /> },
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
            <h3>Parents’ Panel</h3>
            <p>Parents can set rewards for good grades.</p>
          </div>
          <div className="ad-card">
            <h3>Study Motivation</h3>
            <p>Better grades unlock bigger bonuses!</p>
          </div>
        </aside>

        {/* Main Content */}
        <section className="content">
          {/* Hero */}
          {!selectedGame && !showProfile && (
            <div className="hero">
              <h2>Welcome to LuckySim</h2>
              <p>Now it’s not only about games — track your grades and earn rewards from parents!</p>
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
              <h2>Student Profile</h2>
              <p>Username: <b>Guest123</b></p>
              <p>Level: <b>5</b></p>
              <p>Coins: <b>2500</b></p>

              <h3>Latest Grades:</h3>
              <ul>
                <li>Math: A</li>
                <li>English: B+</li>
                <li>Science: A-</li>
              </ul>

              <h3>Achievements:</h3>
              <ul>
                <li>First spin in Slots</li>
                <li>10 rounds of Roulette</li>
                <li>Beat the dealer in Blackjack</li>
              </ul>

              <h3>Rewards Earned:</h3>
              <ul>
                <li>$5 pocket money for 5 A grades</li>
                <li>Extra game time this weekend</li>
              </ul>

              <button className="btn" onClick={() => setShowProfile(false)}>
                Back to Home
              </button>
            </div>
          )}
        </section>

        {/* Right Info Panel */}
        <aside className="info-panel">
          <div className="info-card">
            <h3>Top Students of the Week</h3>
            <ul>
              <li>Anna – 5 A’s</li>
              <li>Mark – 3 A’s</li>
              <li>Alex – 2 A’s</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>News & Updates</h3>
            <p>New Rocket game added!</p>
            <p>Esports betting now available.</p>
          </div>
          <div className="info-card">
            <h3>Active Users</h3>
            <p>Currently online: <b>124</b></p>
          </div>
        </aside>
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
