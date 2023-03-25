import { useState } from "react";

interface List {
  title: string,
  complete: boolean
}

function App() {
  const [newList, setNewList] = useState<string>('')
  const [list, setList] = useState<List>({ title: "Playgame", complete: true })
  console.log(list);
  return (
    <div className="w-screen min-h-screen flex flex-col items-center py-10 gap-10">
      <div className="font-bold text-blue-600 text-xl">Todo App (typescript)</div>
      <form className="flex gap-4">
        <input type="text" className="border border-black rounded-lg px-2 text-sm" onChange={(e) => setNewList(e.target.value)} value={newList} />
        <button className="bg-blue-500 hover:bg-blue-300 duration-150 px-4 py-1 rounded-lg text-white text-sm font-bold">Add</button>
      </form>
      <div className="w-[400px] flex flex-col gap-2">
        <div className="w-full px-4 py-4 border border-black rounded-lg flex justify-between">
          <div>Playgame</div>
          <div className="flex gap-2">
            <button className="w-20 rounded-lg bg-green-500 hover:bg-green-300 duration-150 text-sm text-white font-bold">Complete</button>
            <button className="w-20 rounded-lg bg-red-500 hover:bg-red-300 duration-150 text-sm text-white font-bold">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
