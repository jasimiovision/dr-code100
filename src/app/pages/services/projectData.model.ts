export interface projectData {
    id: string
    project_name: string
    project_path: string
    video_filenames: Array<string>
    flightlog_filenames: Array<string>
    date_created: Date
    modelOutputLoaded: boolean
  }