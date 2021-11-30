export interface floorplanData {
    id: string
    project_id: string
    filename: string
    custom: boolean
    x_min_coordinate: number
    x_max_coordinate: number
    y_min_coordinate: number
    y_max_coordinate: number
    x_start_coordinates: Array<number>
    y_start_coordinates: Array<number>
    actual_height: number
    actual_width: number
  }