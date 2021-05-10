import Axios from "axios"
import endPoints from "constants/endPoints"

export const callAPI = async (body, tag, callback) => {
  return await Axios.post(endPoints.baseURL, body)
    .then((res) => callback(res.data.data[tag]))
    .catch(err => {
      console.log("ere", err.response)
    })
}