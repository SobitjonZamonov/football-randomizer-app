import { useDrop } from "react-dnd";

const DropZone = ({ position, onDrop, assignedPlayer }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PLAYER",
    drop: (item) => onDrop(position, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-[50px] h-[50px] border-4 border-white rounded-2xl flex justify-center items-center ${
        isOver ? "bg-gray-400" : "bg-transparent"
      }`}
    >
      {assignedPlayer ? <span className="text-white">{assignedPlayer}</span> : <h1 className="text-4xl text-white">+</h1>}
    </div>
  );
};

export default DropZone;
