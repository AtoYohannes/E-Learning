import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Contents = new StateArrayModel({ stateName: "contents_new" })

Contents.setInitialState()

Contents.setFetchBody("fetchContents")
Contents.setAddBody("postContent")
Contents.setExceptionMappers({
  "verifyCourse": "verifyCourse"
})

Contents.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Contents.getSelectors()

export const {
  stateName, reducer
} = Contents.getEntity()

export const {
  Fetch, Add, Remove, Edit
} = Contents.getAPIHandles()

export const FetchContents = () => ({
  query: `query {
    fetchContents {
      _id
      title
      chapterID
      contentType
      contentData
      isMandatory
      timeRequiredInMinutes
    }
  }`,
})

export const AddContent = ({
  chapterID, title, contentType,
  contentData, isMandatory,
  timeRequiredInMinutes,
  ...props
}) => ({
  query: `mutation (
      $chapterID: String!,
      $title: String!,
      $contentType: String!,
      $contentData: String!,
      $isMandatory: Boolean!,
      $timeRequiredInMinutes: Int!,
    ) {
      postContent(ContentInput: {
        chapterID: $chapterID,
        title: $title,
        contentType: $contentType,
        contentData: $contentData,
        isMandatory: $isMandatory,
        timeRequiredInMinutes: $timeRequiredInMinutes,
      }) {
        _id
        title
        chapterID
        contentType
        contentData
        isMandatory
        timeRequiredInMinutes
        createdAt
        updatedAt
      }
    }`,
  variables: {
    chapterID, title, contentType,
    contentData,
    isMandatory: Boolean(isMandatory),
    timeRequiredInMinutes: Number(timeRequiredInMinutes)
  }
})

export const VerifyCourse = (id) => ({
  query: `mutation ($id: String!) {
    verifyCourse(_id: $id) {
      _id
      title
      briefIntroduction
      language
      numberOfChapters
      teacherID
      universityID
      categoryID
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id
  }
})

export { selectData as selectContents }