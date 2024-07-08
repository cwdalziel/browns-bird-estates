import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzY0YmVlMDdkYTlkZTBmYjVkZDExOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMDQxMTEwNCwiZXhwIjoxNzIwNjcwMzA0fQ.tVu7dqbroTH_RkI1A68RL18RZ62Ddz1bMWXaZC80qFw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { toker: "Bearer " + TOKEN },
});
