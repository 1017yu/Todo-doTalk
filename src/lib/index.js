const options = (method, data) => ({
  method,
  headers: {
    "content-type": "application/json",
    apikey: "KDT5_nREmPe9B",
    username: "KDT5__YuHeeTae",
  },
  body: JSON.stringify(data),
});

const URL = "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos";

// 항목 생성
const createTodo = async ({ title, order }) => {
  const res = await fetch(URL, options("POST", { title, order }));
  const data = await res.json();
  return data;
};

// 목록 조회
const getTodo = async () => {
  const res = await fetch(URL, options("GET"));
  const data = await res.json();
  return data;
};

// 항목 수정
const editTodo = async ({ id, title, done, order }) => {
  const url = `${URL}/${id}`;
  const res = await fetch(url, options("PUT", { title, done, order }));
  const data = await res.json();
  return data;
};

// 항목 삭제
const deleteTodo = async (id) => {
  const url = `${URL}/${id}`;
  const res = await fetch(url, options("DELETE"));
  const data = await res.json();
  return data;
};

// order 정렬
const reorderTodo = async (todoIds) => {
  const url = `${URL}/reorder`;
  const res = await fetch(url, options("PUT", { todoIds }));
  const data = await res.json();
  return data;
};

export { createTodo, getTodo, editTodo, deleteTodo, reorderTodo };
