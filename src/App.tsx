import Brand from "./components/Brand/Brand";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 gap-4">
      <h1 className="text-2xl font-semibold text-slate-700">
        Theme & Brand Setup Test
      </h1>
      <Brand />
    </main>
  );
}

export default App;