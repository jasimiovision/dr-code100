export interface defectData {
    id: string
    project_id: string
    floorplan_id: string
    keyframe_id: string
    position_coordinates: Array<number>
    x: Array<number>
    y: Array<number>
    defect_type: string
    defect_severity: string
    defect_comment: string
    verified_status: boolean
  }