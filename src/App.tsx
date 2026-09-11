import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-[150vh] bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-3xl font-bold text-slate-900">
            Navbar Setup
          </h1>

          <p className="mt-3 text-center text-sm text-slate-500">
            Scroll the page to test the sticky navigation.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;