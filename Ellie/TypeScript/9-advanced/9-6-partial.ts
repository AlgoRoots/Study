{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };
  function updateToDo(
    todo: Readonly<ToDo>,
    fieldsToUpdate: Partial<ToDo>
  ): ToDo {
    // todo.title = "jaja"; error

    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  const updated = updateToDo(todo, { priority: "low" });
  console.log("updated", updated);
}
