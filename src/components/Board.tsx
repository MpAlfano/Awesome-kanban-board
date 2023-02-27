import Ticket from "./Ticket";
import { DragDropContext, DropResult, Draggable } from "react-beautiful-dnd";
import Droppable from "./StrictModeDroppable";
import { useState } from "react";
import originalData from "../data";

const Board = () => {
  const [data, setData] = useState(originalData);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="flex flex-wrap md:flex-nowrap lg:w-full items-start m-auto">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <section
                {...provided.droppableProps}
                className="p-4 mx-2 rounded-lg bg-slate-500 w-full mb-4"
                ref={provided.innerRef}
              >
                <h1 className="text-xl font-semibold mb-4 text-center">
                  {section.title}
                </h1>
                <div className="">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.7" : "1",
                          }}
                        >
                          <Ticket>{task.title}</Ticket>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </section>
            )}
          </Droppable>
        ))}
      </main>
    </DragDropContext>
  );
};

export default Board;
