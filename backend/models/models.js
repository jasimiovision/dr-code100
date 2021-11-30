
const mongoose = require('mongoose');

// ids will be automatically assigned by mongoDB as _id
// const allProjectsSchema = mongoose.Schema({
//     // _id: { type: String },
//     projects: { type: Array }, // e.g. [{name: Vopak01, id: jksdahsd}, {name: Vopak02, id: sjhdjfks}]
// });

const projectSchema = mongoose.Schema({
    project_name: { type: String, required: true }, // e.g. Vopak01
    project_path: {type: String, required: true}, // lowercase and replace spacing from project_name with '-'
    project_type: { type: String, enum: ['dr-one', 'report'], required: true }, // type of project
    video_filenames: { type: [String] }, // pass to localisation model
    flightlog_filenames: { type: [String] }, // pass to localisation model
    date_created: { type: Date },
    modelOutputLoaded: { type: Boolean, default: false } // "true" after done with localisation and inference, and data extracted from identification.json into MongoDB
});

const floorplanSchema = mongoose.Schema({
    project_id: { type: String, required:true },
    filename: { type: String, required: true }, // to access from S3
    custom: { type: Boolean, required: true }, // custom floorplan defects are normalized w.r.t floorplan image instead of the left, right, top, bottom bounds.
    // coordinates are normalized w.r.t floorplan size
    x_min_coordinate: { type: Number }, // left bound coordinate
    x_max_coordinate: { type: Number }, // right bound coordinate
    y_min_coordinate: { type: Number }, // bottom bound coordinate
    y_max_coordinate: { type: Number }, // top bound coordinate
    x_start_coordinates: { type: [Number] }, // starting position x coordinate for each video
    y_start_coordinates: { type: [Number] }, // starting position y coordinate for each video
    actual_height: { type: Number }, // height of tank, for scaling purposes
    actual_width: { type: Number }, // circumference of tank, for scaling purposes
});

const keyframeSchema = mongoose.Schema({
    project_id: { type: String, required: true },
    filename: { type: String, required: true }, // S3 key
    // localisation_coordinates and image_size for defect mapping purposes
    position_coordinates: { type: Array, required: true }, // [x,y]
    fov_coordinates: { type: Array }, // [dx(width),dy(height)]
    image_size: { type: Array, required: true }, // e.g. [1920,1080] -> to un-normalize coordinates
    verified_status: { type: Boolean, required: true }, // model output: false, after edit: true
});

const defectSchema = mongoose.Schema({
    project_id: { type: String, required: true },
    floorplan_id: { type: String, required: true },
    keyframe_id: { type: String, required: true }, // id of parent keyframe
    position_coordinates: { type: Array, required: true }, // [x,y] -> position of defect in floorplan
    x: { type: Array }, // normalized x coordinates of polygon points
    y: { type: Array }, // normalized y coordinates of polygon points
    defect_type: { type: String }, // defect class
    defect_severity: { type: String }, // currently not-in-use
    defect_comment: { type: String },
    verified_status: { type: Boolean, required: true }, // model output: false, after edit: true, no defect: *delete defect instance*
});

const reportContentSchema = mongoose.Schema({
    type: { type: String, enum: ['editor', 'floorplan'], required: true},
    reportData: { type: String, default: undefined},
    floorplanId: { type: String, default: undefined}
})

const reportSchema = mongoose.Schema({
    header_data: { type: String },
    footer_data: { type: String },
    thumbnail_key: { type: String },
    content: { type: [reportContentSchema] },
    project_id: { type: String, required: true}
});

const templateSchema = mongoose.Schema({
    thumbnail_key: { type: String, default: "" },
    header_data: { type: String, default: "" },
    content: { type: [reportContentSchema], default: [] },
    template_name: { type: String, default: "" },
    template_description: { type: String, default: "" }
});

module.exports = {
    // allProjects: mongoose.model('AllProjects', allProjectsSchema), // first thing to fetch
    project : mongoose.model('Project', projectSchema),
    floorplan: mongoose.model('Floorplan', floorplanSchema),
    keyframe: mongoose.model('Keyframe', keyframeSchema),
    defect: mongoose.model('Defect', defectSchema),
    report: mongoose.model('Report', reportSchema),
    template: mongoose.model('Template', templateSchema)
    //mongodb collection will be the lowercase, plural (e.g. reports)
}
