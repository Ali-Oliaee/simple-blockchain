import axios from "./axios";

export const getBlocks = () => axios.get("get-blocks").then(({ data }) => data);
export const getBlock = (id) =>
  axios.get(`get-block-transactions/${id}`).then(({ data }) => data);
