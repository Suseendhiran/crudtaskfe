import axios from "axios";

export default axios.create({
  baseURL: "https://crudtask1.herokuapp.com/",
  responseType: "json",
  headers: { Authorization: localStorage.getItem("token") },
});
