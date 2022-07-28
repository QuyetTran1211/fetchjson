import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  finished: any;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  // console.log(res.data);
  const todo = res.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(
    `The todo with Id: ${ID} Has a title of: ${title} It is finished? ${finished}`
  );
});
