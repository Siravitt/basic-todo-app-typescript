import { useState } from "react";
import List from "./components/List";

interface data {
  title: string,
  complete: boolean
}
let allList: data[] = [];

function App() {
  const [addNewList, setAddNewList] = useState<string>('')
  const [list, setList] = useState(allList)

  const addList = (e: any) => {
    e.preventDefault()
    const newList = structuredClone(list);
    newList.push({ title: addNewList, complete: false })
    setList(newList)
    setAddNewList("")
  }

  const onComplete = (idx: number) => {
    const newList = structuredClone(list);
    newList[idx].complete = true;
    setList(newList);
  }

  const onDelete = (idx: number) => {
    const newList = structuredClone(list);
    newList.splice(idx, 1);
    setList(newList);
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center py-10 gap-10">
      <div className="font-bold text-blue-600 text-xl">Todo App (typescript)</div>
      <form className="flex gap-4" onSubmit={addList}>
        <input type="text" className="border border-black rounded-lg px-2 text-sm" onChange={(e) => setAddNewList(e.target.value)} value={addNewList} />
        <button className="bg-blue-500 hover:bg-blue-300 duration-150 px-4 py-1 rounded-lg text-white text-sm font-bold">Add</button>
      </form>

      <div className="w-[400px] flex flex-col gap-2">
        {list?.map((el, idx) => <List key={idx} title={el.title} complete={el.complete} index={idx} onComplete={onComplete} onDelete={onDelete} />)}
      </div>
    </div>
  );
}

export default App;
