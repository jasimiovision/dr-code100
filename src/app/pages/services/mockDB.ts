import { HttpClient } from '@angular/common/http';

const PROJECTID = "5f0b4356c358f443988d8678"; // Vopak 2020

let defects = [ // simulate mongoDB (dynamically fetched by projectID)
    {
        id: "defect1",
        project_id: PROJECTID,
        keyframe_id: "keyframe1",
        floorplan_id: "floorplan1",
        position_coordinates: [0.1, 0.3],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.1, 0.2, 0.1, 0.1],
        defect_type: "pitting",
        defect_severity: "high",
        defect_comment: "1mm depth"
    },
    {
        id: "defect2",
        project_id: PROJECTID,
        keyframe_id: "keyframe2",
        floorplan_id: "floorplan1",
        position_coordinates: [0.2, 0.3],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.2, 0.3, 0.2, 0.2],
        defect_type: "pitting",
        defect_severity: "high",
        defect_comment: "2mm depth"
    },
    {
        id: "defect3",
        project_id: PROJECTID,
        keyframe_id: "keyframe3",
        floorplan_id: "floorplan1",
        position_coordinates: [0.3, 0.3],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.3, 0.4, 0.3, 0.3],
        defect_type: "pitting",
        defect_severity: "high",
        defect_comment: "3mm depth"
    },
    {
        id: "defect4",
        project_id: PROJECTID,
        keyframe_id: "keyframe4",
        floorplan_id: "floorplan1",
        position_coordinates: [0.4, 0.4],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.4, 0.5, 0.4, 0.4],
        defect_type: "crack",
        defect_severity: "low",
        defect_comment: "4mm length"
    },
    {
        id: "defect5",
        project_id: PROJECTID,
        keyframe_id: "keyframe5",
        floorplan_id: "floorplan1",
        position_coordinates: [0.5, 0.5],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.5, 0.6, 0.5, 0.5],
        defect_type: "crack",
        defect_severity: "low",
        defect_comment: "5mm length"
    },
    {
        id: "defect6",
        project_id: PROJECTID,
        keyframe_id: "keyframe6",
        floorplan_id: "floorplan1",
        position_coordinates: [0.6, 0.6],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.6, 0.7, 0.6, 0.6],
        defect_type: "crack",
        defect_severity: "low",
        defect_comment: "6mm length"
    },
    {
        id: "defect7",
        project_id: PROJECTID,
        keyframe_id: "keyframe7",
        floorplan_id: "floorplan1",
        position_coordinates: [0.7, 0.7],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.7, 0.8, 0.7, 0.7],
        defect_type: "corrosion",
        defect_severity: "high",
        defect_comment: "7mm squared"
    },
    {
        id: "defect8",
        project_id: PROJECTID,
        keyframe_id: "keyframe8",
        floorplan_id: "floorplan1",
        position_coordinates: [0.8, 0.8],
        x: [0.4, 0.5, 0.6, 0.4],
        y: [0.8, 0.9, 0.8, 0.8],
        defect_type: "corrosion",
        defect_severity: "high",
        defect_comment: "8mm squared"
    },
    {
        id: "defect9",
        project_id: PROJECTID,
        keyframe_id: "keyframe9",
        floorplan_id: "floorplan1",
        position_coordinates: [0.9, 0.9],
        x: [0.7, 0.8, 0.9, 0.7],
        y: [0.8, 0.9, 0.8, 0.8],
        defect_type: "corrosion",
        defect_severity: "high",
        defect_comment: "9mm squared"
    }
];
let keyframes = [ // simulate mongoDB (dynamically fetched by projectID)
    {
        id: "keyframe1",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_0.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe2",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_1.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe3",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_2.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe4",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_3.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe5",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_4.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe6",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_5.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe7",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_6.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe8",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_7.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
    {
        id: "keyframe9",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_6CA.mp4_0.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe10",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_0.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe11",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_6CA.mp4_0.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe12",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_1.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe13",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_2.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe14",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_3.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe15",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_4.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe16",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_5.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe17",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_6.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
        {
        id: "keyframe18",
        project_id: PROJECTID,
        filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_7.jpg",
        position_coordinates: [],
        fov_coordinates: [0.1, 0.1],
        verified_status: false
    },
];
let floorplans = [ // simulate mongoDB (dynamically fetched by projectID)
    {
        id: "floorplan1",
        project_id: PROJECTID,
        filename: "../../../../assets/IMG_6335.jpg",
        custom: false
    },
    {
        id: "floorplan2",
        project_id: PROJECTID,
        filename: "../../../../assets/IMG_6336.jpg",
        custom: true
    },
    {
        id: "floorplan3",
        project_id: PROJECTID,
        filename: "../../../../assets/IMG_6337.jpg",
        custom: true
    },
];

// generate random position_coordinates
function getCoordinates(){
    const x = Math.min(Math.max(Math.random(), 0.1), 0.9)
    const y = Math.min(Math.max(Math.random(), 0.3), 0.9)
    return [x,y]
}
for(let keyframe of keyframes){
    keyframe.position_coordinates = getCoordinates()
}
for(let defect of defects){
    defect.position_coordinates = keyframes.find(kf=>kf.id ===defect.keyframe_id).position_coordinates
}


export function getDefects(){
    return defects
}
export function getKeyframes(){
    return keyframes
}
export function getFloorplans(){
    return floorplans
}
export function setDefects(dfs){
    defects = dfs
}
export function setKeyframes(kfs){
    keyframes = kfs
}
export function setFloorplans(fps){
    floorplans = fps
}











// let keyframes = [ // simulate mongoDB (dynamically fetched by projectID)
//     {
//         id: "keyframe1",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_0.jpg",
//         position_coordinates: [0.1, 0.3],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe2",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_1.jpg",
//         position_coordinates: [0.2, 0.3],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe3",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_2.jpg",
//         position_coordinates: [0.3, 0.1],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe4",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_3.jpg",
//         position_coordinates: [0.4, 0.1],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe5",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_4.jpg",
//         position_coordinates: [0.5, 0.1],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe6",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_5.jpg",
//         position_coordinates: [0.6, 0.1],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe7",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_6.jpg",
//         position_coordinates: [0.7, 0.1],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe8",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_7.jpg",
//         position_coordinates: [0.8, 0.1],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//     {
//         id: "keyframe9",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_6CA.mp4_0.jpg",
//         position_coordinates: [0.9, 0.1],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe10",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_0.jpg",
//         position_coordinates: [0.1, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe11",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_6CA.mp4_0.jpg",
//         position_coordinates: [0.2, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe12",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_1.jpg",
//         position_coordinates: [0.3, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe13",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_2.jpg",
//         position_coordinates: [0.4, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe14",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_3.jpg",
//         position_coordinates: [0.5, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe15",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_4.jpg",
//         position_coordinates: [0.6, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe16",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_5.jpg",
//         position_coordinates: [0.7, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe17",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_6.jpg",
//         position_coordinates: [0.8, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
//         {
//         id: "keyframe18",
//         project_id: PROJECTID,
//         filename: "../../../../assets/mock-data/localization_output/keyframes/TK704_4CG.mp4_7.jpg",
//         position_coordinates: [0.9, 0.9],
//         fov_coordinates: [0.1, 0.1],
//         verified_status: false
//     },
// ];