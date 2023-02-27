import Board from "./components/Board";

function App() {
  return (
    <div className="bg-gradient-to-b from-orange-100 via-stone-300 to-slate-500 min-h-screen">
      <div className="flex flex-col justify-center lg:px-10">
        <header className="m-auto text-2xl md:text-4xl font-semibold py-4 md:pb-10 text-center">
          KanBan Board for Your Super Cool Project
        </header>
        <Board />
      </div>
    </div>
  );
}

export default App;
