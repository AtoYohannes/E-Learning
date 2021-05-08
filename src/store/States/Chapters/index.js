import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Chapters = new StateArrayModel({ stateName: "chapters_new" })

Chapters.setInitialState()

Chapters.setFetchBody("fetchChapters")
// Chapters.setAddBody("postNotice")
// Chapters.setDeleteBody("removeNotice")

Chapters.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Chapters.getSelectors()

export const {
  stateName, reducer
} = Chapters.getEntity()

export const {
  Fetch, Add, Remove
} = Chapters.getAPIHandles()

export const FetchChapters = () => ({
  query: `query {
    fetchChapters {
      _id
      courseID
      title
      numberOfReading
      numberOfVideos
      numberOfAssignments
      createdAt
      updatedAt
    }
  }`,
})

export { selectData as selectChapters }