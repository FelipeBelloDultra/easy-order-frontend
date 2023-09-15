import { Button } from "~/components/core";

function App() {
  return (
    <div className="flex items-center justify-center h-[500px] m-3">
      <Button onClick={console.log}>Novo pedido</Button>
    </div>
  );
}

export default App;
