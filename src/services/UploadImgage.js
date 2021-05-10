import Axios from "axios"
import endPoints from "constants/endPoints"
import FormData from "form-data"

export const UploadImage = async (file, callback) => {
  console.log("file", file)
  const formData = new FormData()
  formData.append("image", file)
  return await Axios.post(endPoints.imageURL, formData)
    .then((res) => callback(res.data))
    .catch(err => {
      console.log("ere", err.response)
    })
}