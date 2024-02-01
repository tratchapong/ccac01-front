function App() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-pink-600 text-center border bg-ghost-400 py-5 m-6 font-bold">
        Hello world!
      </h1>
      <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
      <div className="flex gap-3 border justify-center py-3">
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
    </div>
  );
}

export default App;
