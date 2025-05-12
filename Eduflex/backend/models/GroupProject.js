const mongoose = require("../config/mongodb");

const { Schema } = mongoose;

const GroupProjectSchema = new Schema({
  courseID: {
    type: String,
  },
  classID: {
    type: String,
  },
  senderID: {
    type: String,
  },
  projectName: {
    type: String,
    Required: true,
  },
  projectDetail: {
    type: String,
    Required: true,
  },
  Task: [
    {
      task: {
        type: String,
      },
      AssignTo: {
        type: Object,
      },
      TaskDescription: {
        type: String,
      },
      TotalNumber: {
        type: Number,
      },
      AcquireNumber: {
        type: Number,
        default: null,
      },
      Remarks: {
        type: String,
        default: null,
      },
      Attachment: {
        type: Array,
        default: null,
      },
      Solution : [
          {
            Answer:{
              type: String,
            },
            Attachment: {
              type: Array,
              default: null,
            },
          }
        ],
      Progress: {
        type: String,
        default: "In Progress",
      },
    },
  ],
  students: {
    type: [Schema.Types.Mixed], // Allows any object in the array
  },
});

module.exports = mongoose.model("groupProject", GroupProjectSchema);
