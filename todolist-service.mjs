export class TodoListService {

  todolist = ["Bagus", "Dwi", "Kurniawan"];

  getJsonTodoList(){
    return JSON.stringify({
      code: 200,
      stratus: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value
        }
      })
    });
  }

  getTodoList(req, res){
    res.write(this.getJsonTodoList());
    res.end();
  }
}