import { Ghost, Candy, Calendar, Moon, Star, Skull, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/calabaza.css"

export default function Component() {
  return (
    <div className="flex-col">
      <header className="header">
        <Link className="header-link" href="#">
          <Gamepad className="gamepad-icon" />
          <span className="logo-text">SpookyKidsPC</span>
        </Link>
        <nav className="nav-links">
          <Link className="nav-item" href="#">Home</Link>
          <Link className="nav-item" href="#">Games</Link>
          <Link className="nav-item" href="#">Fun</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="section bg-purple-200">
          <div className="container">
            <div className="flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h1 className="title">Spooky PC Fun for Kids!</h1>
                <p className="description">Play cool Halloween games, learn spooky facts, and have a monster of a good time! 🎃👻🖥️</p>
                <div className="button-group">
                  <button className="button bg-orange-400">Start Playing!</button>
                  <button className="button border-purple-600">Learn Spooky Facts</button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <img src="/placeholder.svg" alt="Kids having fun with Halloween PC games" width={400} height={300} className="image" />
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-orange-200">
          <div className="container">
            <h2 className="section-title">Spooky PC Games for Kids!</h2>
            <div className="grid">
              <div className="card">
                <Ghost className="icon" />
                <h3 className="card-title">Friendly Ghost Chase</h3>
                <p className="card-description">Help Casper find his ghostly friends in this fun hide-and-seek game!</p>
                <button className="button bg-orange-400">Play Now!</button>
              </div>
              <div className="card">
                <Candy className="icon" />
                <h3 className="card-title">Candy Collector</h3>
                <p className="card-description">Collect yummy virtual candies and create your own Halloween treats!</p>
                <button className="button bg-orange-400">Start Collecting!</button>
              </div>
              <div className="card">
                <Skull className="icon" />
                <h3 className="card-title">Skeleton Dance Party</h3>
                <p className="card-description">Learn funny dance moves with Skelly and his bone-rattling friends!</p>
                <button className="button bg-orange-400">Let's Dance!</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-purple-200">
          <div className="container">
            <div className="flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <h2 className="section-title">Halloween Computer Club</h2>
                <p className="description">Join our super fun Halloween Computer Club! Learn cool stuff about computers while enjoying spooky activities!</p>
                <ul className="list">
                  <li className="list-item"><Calendar className="icon" /> Every Saturday in October</li>
                  <li className="list-item"><Ghost className="icon" /> Fun Halloween-themed lessons</li>
                  <li className="list-item"><Candy className="icon" /> Virtual treats for all members</li>
                </ul>
                <button className="button bg-orange-400">Join the Club!</button>
              </div>
              <div className="lg:w-1/2">
                <img src="/placeholder.svg" alt="Kids in Halloween costumes using computers" width={400} height={300} className="image" />
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-orange-200">
          <div className="container">
            <div className="flex-col items-center text-center">
              <h2 className="section-title">Join Our Spooky Mailing List!</h2>
              <p className="description">Get cool Halloween computer tips and fun game news! (Ask your parents first!)</p>
              <form className="form">
                <input className="input" placeholder="Your email" type="email" />
                <button className="button bg-orange-400" type="submit">Join!</button>
              </form>
              <p className="note">Remember to ask your parents before signing up!</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2023 SpookyKidsPC. All rights reserved.</p>
        <nav className="footer-nav">
          <Link className="footer-link" href="#">Parent Info</Link>
          <Link className="footer-link" href="#">Safety Tips</Link>
        </nav>
      </footer>
      <div className="fixed-elements">
        <Moon className="moon" />
        <Star className="star" />
        <Ghost className="ghost" />
        <Skull className="skull" />
      </div>
    </div>
  );
}
