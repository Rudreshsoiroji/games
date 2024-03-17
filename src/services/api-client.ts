import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "27434b9980164df2977788d73b453e7e",
  },
});
