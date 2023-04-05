interface ListProps {
  title: string
  complete: boolean
  index: number
  onComplete: (idx: number) => void
}

export default function List(props: ListProps) {
  return (
    <div className={`w-full px-4 py-4 border border-black rounded-lg flex justify-between ${props.complete ? "bg-green-200" : "bg-red-200"}`}>
      <div>{props.title}</div>
      <div className="flex gap-2">
        {props.complete ? "" : <button onClick={() => props.onComplete(props.index)} className="w-20 rounded-lg bg-green-500 hover:bg-green-300 duration-150 text-sm text-white font-bold">
          Complete
        </button>}
        <button className="w-20 rounded-lg bg-red-500 hover:bg-red-300 duration-150 text-sm text-white font-bold">
          Delete
        </button>
      </div>
    </div>
  );
}
