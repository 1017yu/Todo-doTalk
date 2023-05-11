const options = (method, data) => ({
  method,
  headers: {
    "content-type": "application/json",
    apikey: "KDT5_nREmPe9B",
    username: "KDT5_YuHeeTae",
  },
  body: JSON.stringify(data),
});

const url = "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos";

// 항목 생성
const createTodo = async (title) => {
  const res = await fetch(`${url}`, options("POST", { title }));
  const data = await res.json();
  return data;
};

// 목록 조회
const fetchTodos = async () => {
  const res = await fetch(url, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

// 항목 수정
const updateTodo = async ({ id, title, completed }) => {
  const url = `${URL}/:${id}`;
  const res = await fetch(url, options("PUT", { title, completed }));
  const data = await res.json();
  return data;
};

// 항목 삭제
const deleteTodo = async (id) => {
  const url = `${URL}/:${id}`;
  const res = await fetch(url, options("DELETE", null));
  const data = await res.json();
  return data;
};

export { createTodo, fetchTodos, updateTodo, deleteTodo };
