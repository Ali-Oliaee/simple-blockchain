import axios from "./axios";

export const getBlocks = () => axios.get("get-blocks").then(({ data }) => data);
