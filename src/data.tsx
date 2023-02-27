import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: " 📃 To do",
    tasks: [
      {
        id: uuidv4(),
        title: "Update functionality to use pagination for larger results",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " ✏️ In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Style page to match mockup",
      },
      {
        id: uuidv4(),
        title: "Fix database being called on each render",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " ✔️ Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Create skeleton html layout",
      },
      {
        id: uuidv4(),
        title: "Research libraries, frameworks and API's",
      },
      {
        id: uuidv4(),
        title: "Set up database",
      },
    ],
  },
];

export default data;
