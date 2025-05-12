const express = require("express");
const FilesModel = require("../models/FilesModel");
const LectureModel = require("../models/LectureModel");
const GroupProjectModel = require("../models/GroupProject");
const GroupProject = require("../models/GroupProject");

const route = express.Router();

route.get("/", async (req, res) => {
  const data = await FilesModel.find().sort({
    createdAt: "desc",
  });
  res.json(data);
});

//get one by id
route.get("/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Missing URL parameter: username");
  }
  await FilesModel.findOne({ _id: req.params.id })
    .then((doc) => {
      if (doc) {
        return res.json({ success: true, doc });
      } else {
        return res.json({ success: false, error: "Does not exists" });
      }
    })
    .catch((err) => {
      return res.json({ success: false, error: "Server error" });
    });
});

//get course notes
route.get("/courseLecture/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Missing URL parameter: username");
  }
  await LectureModel.find({ courseID: req.params.id })
    .then((docs) => {
      if (docs) {
        return res.json({ success: true, docs });
      } else {
        return res.json({ success: false, error: "Does not exists" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, error: "Server error" });
    });
});

route.get("/courseProject/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Missing URL parameter: username");
  }
  await GroupProject.find({ courseID: req.params.id })
    .then((docs) => {
      if (docs) {
        return res.json({ success: true, docs });
      } else {
        return res.json({ success: false, error: "Does not exists" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, error: "Server error" });
    });
});

route.get("/course/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Missing URL parameter: username");
  }
  await FilesModel.find({ courseID: req.params.id })
    .then((docs) => {
      if (docs) {
        return res.json({ success: true, docs });
      } else {
        return res.json({ success: false, error: "Does not exists" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, error: "Server error" });
    });
});

//create task
route.post("/create", async (req, res) => {
  let body = req.body;

  FilesModel.create(body)
    .then((doc) => {
      res.json({ success: true, doc });
    })
    .catch((err) => {
      //console.log(err);
      res.json({ success: false, error: "File is too big" });
    });
});

route.post("/createLecture", async (req, res) => {
  let body = req.body;

  LectureModel.create(body)
    .then((doc) => {
      res.json({ success: true, doc });
    })
    .catch((err) => {
      //console.log(err);
      res.json({ success: false, error: "File is too big" });
    });
});

route.post("/createGroup", async (req, res) => {
  let body = req.body;

  GroupProjectModel.create(body)
    .then((doc) => {
      res.json({ success: true, doc });
    })
    .catch((err) => {
      //console.log(err);
      res.json({ success: false, error: "File is too big" });
    });
});

route.post("/findGroup&AddTask", async (req, res) => {
  const { groupId, task } = req.body;

  try {
    // 1. Find the group project by ID
    const group = await GroupProjectModel.findById(groupId);

    if (!group) {
      return res
        .status(404)
        .json({ success: false, message: "Group not found" });
    }

    // 2. Push the new task to the Task array
    group.Task.push(task);

    // 3. Save the updated group
    const updatedGroup = await group.save();

    res.json({ success: true, group: updatedGroup });
  } catch (err) {
    console.error("Error updating group with task:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

route.post("/editTaskMarksAndRemarks", async (req, res) => {
  const { projectId, taskId, Marks, Remarks } = req.body;

  try {
    // 1. Find the project by ID
    const project = await GroupProjectModel.findById(projectId);

    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    // 2. Find the task by ID within the Task array
    const task = project.Task.id(taskId);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found in project" });
    }

    // 3. Update marks and remarks
    task.AcquireNumber = Marks;
    task.Remarks = Remarks;
    task.Progress = "Completed";

    
    // 4. Save the updated project
    await project.save();

    res.json({
      success: true,
      message: "Task updated successfully",
      updatedTask: task,
    });
  } catch (err) {
    console.error("Error updating task marks/remarks:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

route.post("/notAssignedGroup", async (req, res) => {
  try {
    const { students } = req.body; // List of students to check (e.g., [{ userID: "123" }, { userID: "456" }])
    if (!Array.isArray(students)) {
      return res.status(400).json({ error: "Students must be an array." });
    }

    // Extract userIDs from the provided list
    const studentIDs = students.map((student) => student.userID);
    console.log("Test Log 4", studentIDs);
    // Find all documents where any of the provided students exist in the `students` array
    const existingStudents = await GroupProjectModel.find({
      students: { $elemMatch: { userID: { $in: studentIDs } } },
    });
    console.log("Test Log 5", existingStudents);
    // Extract all userIDs that are already in the database
    const existingStudentIDs = new Set(
      existingStudents.flatMap((doc) =>
        doc.students.map((student) => student.userID)
      )
    );

    // Find students that are not in the database
    const missingStudents = students.filter(
      (student) => !existingStudentIDs.has(student.userID)
    );
    console.log("Test Log 6", missingStudents);

    res.status(200).json({ missingStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

//edit task
route.put("/update/:id", (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Missing URL parameter: username");
  }
  FilesModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
    }
  )
    .then((doc) => {
      console.log(doc);
      if (!doc) {
        return res.json({ success: false, error: "doex not exists" });
      }
      return res.json({ success: true, doc });
    })
    .catch((err) => {
      res.json({ success: false, message: err });
    });
});

//delete task
route.delete("/delete/:id", (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Missing URL parameter: username");
  }
  FilesModel.findOneAndRemove({
    _id: req.params.id,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/deleteLecture/:id", (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Missing URL parameter: username");
  }
  LectureModel.findOneAndRemove({
    _id: req.params.id,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = route;
