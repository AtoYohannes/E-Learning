import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Chapters = new StateArrayModel({ stateName: "chapters_new" })

Chapters.setInitialState()

Chapters.setFetchBody("fetchChapters")
Chapters.setAddBody("postChapter")
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

export const AddChapter = ({
  title, courseID, numberOfReading, numberOfVideos, numberOfAssignments
}) => ({
  query: `mutation (
    $title: String!, $courseID: String!, $numberOfReading: Int!,
    $numberOfVideos: Int!, $numberOfAssignments: Int!
  ) {
    postChapter(ChapterInput: {
      title: $title,
      courseID: $courseID,
      numberOfReading: $numberOfReading,
      numberOfVideos: $numberOfVideos,
      numberOfAssignments: $numberOfAssignments
    }) {
      _id
      title
      courseID
      numberOfReading
      numberOfVideos
      numberOfAssignments
      error {
        type
        message
      }
      createdAt
      updatedAt
    }
  }`,
  variables: {
    title, courseID,
    numberOfReading: Number(numberOfReading),
    numberOfVideos: Number(numberOfVideos),
    numberOfAssignments: Number(numberOfAssignments)
  }
})

export { selectData as selectChapters }