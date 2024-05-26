import Card from "./components/Card";
import allimg from "./components/imgurl";
function App() {
  return (
    <>
      <nav className=" bg-zinc-700 h-20 text-white align-middle grid items-center justify-center text-3xl capitalize font-bold">
        <h2>all items</h2>
      </nav>
      <div className="flex flex-wrap gap-5 items-center justify-center bg-zinc-800 py-10">
        {allimg.map((img, i) => {
          return <Card allimg={img} item={i} key={i} />;
        })}
      </div>
    </>
  );
}

export default App;
