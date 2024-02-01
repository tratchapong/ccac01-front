import RegisterForm from "./layout/RegisterForm";

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-pink-600 text-center border bg-ghost-400 py-5 m-6 font-bold">
        Hello world!
      </h1>
      <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
      <hr/>
      <RegisterForm />
    </div>
  );
}

export default App;
