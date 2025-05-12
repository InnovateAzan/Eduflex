import React, { useState, useEffect } from "react";
import axios from "../../store/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { Link, useParams } from "react-router-dom";
import ListTable from "../../components/courses/NotesTable";
import ProjectTable from "../../components/courses/ProjectTable";

import { getCapitalize, errorAlert } from "../../utils";

const tableHeader = [
  { id: "date", name: "Project Name" },
  { id: "descripton", name: "Project Details" },
];

function CourseDetails() {
  const [course, setcourse] = useState([]);
  const [loading, setloading] = useState(false);
  const [notes, setnotes] = useState([]);
  const [projectGroup, setprojectGroup] = useState([]);
  const [lecture, setlectures] = useState([]);
  const [showNotes, setShowNotes] = useState(false); // New toggle state
  const [showProjectGroup, setShowProjectGroup] = useState(false); // New toggle state
  const [showLecture, setShowLecture] = useState(false); // New toggle state
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [taskData, setTaskData] = useState({
    task: "",
    AssignTo: "",
    TaskDescription: "",
    TotalNumber: "",
    Attachment: [],
  });

  const handleTaskInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleFileChange = (e) => {
    setTaskData({ ...taskData, Attachment: Array.from(e.target.files) });
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submitted Task:", taskData);
    // let fileUrl = " ";
    // if (!file) {
    //   return errorAlert("Please select file");
    // }
    setloading(true);
    // const fileData = new FormData();
    // fileData.append("photo", file);
    // let data = await axios.post("/upload", fileData, {});
    // if (data.error) {
    //   return errorAlert("The file is too big");
    // }
    // fileUrl = data?.path;
    const selectedStudent = selectedProject.students.find(
      (student) => student.userID === taskData.AssignTo
    );
    console.log("Selected Student:", selectedStudent);
    await axios
      .post("/notes/findGroup&AddTask", {
        groupId: selectedProject._id,
        task: {
          ...taskData,
          AssignTo: selectedStudent, // Pass the full student object
        },
      })
      .then((response) => {
        if (response.data.error) {
          errorAlert(response.data.error);
          setloading(false);
          return 0;
        }

        setloading(false);
        setShowTaskForm(false);
      })

      .catch((err) => {
        console.log(err);
        setloading(false);
      });

    // Add your logic to send data to the backend
  };

  const { id, classID } = useParams();
  const user = useSelector(selectUser);

  useEffect(() => {
    axios.get(`/courses/courseCode/${id}`).then((res) => {
      setcourse(res.data.docs);
    });
  }, [id]);

  useEffect(() => {
    setloading(true);
    axios.get(`/notes/course/${id}`).then((res) => {
      setloading(false);
      setnotes(res.data.docs);
    });
  }, [id]);

  useEffect(() => {
    setloading(true);
    axios.get(`/notes/courseProject/${id}`).then((res) => {
      setloading(false);
      setprojectGroup(res.data.docs);
    });
  }, [id]);

  useEffect(() => {
    setloading(true);
    axios.get(`/notes/courseLecture/${id}`).then((res) => {
      console.log(res.data.docs);

      setloading(false);
      setlectures(res.data.docs);
    });
  }, [id]);

  const handleDelete = (id) => {
    axios.delete(`/notes/delete/${id}`).then((res) => {
      if (res.data.error) {
        errorAlert(res.data.error);
      }
      setnotes(notes.filter((e) => e._id !== id));
    });
  };
  const handleDeleteLecture = (id) => {
    axios.delete(`/notes/deleteLecture/${id}`).then((res) => {
      if (res.data.error) {
        errorAlert(res.data.error);
      }
      setlectures(notes.filter((e) => e._id !== id));
    });
  };

  const handleShowDetails = (project) => {
    console.log(project);
    setSelectedProject(project);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  const [activeFinishInputs, setActiveFinishInputs] = useState({});

  const toggleFinishInput = (taskId) => {
    setActiveFinishInputs((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const handleMarksSubmit = async (projectID, taskId, marks, remarks) => {
    try {
      const response = await axios.post("/notes/editTaskMarksAndRemarks", {
        projectId: projectID,
        taskId: taskId,
        Marks: marks,
        Remarks: remarks,
      });

      if (response.data.success) {
        alert("Task updated successfully!");
        // You can call a refetch function or update local state here
      } else {
        alert("Failed to update task: " + response.data.message);
      }
    } catch (error) {
      console.error("Error submitting marks:", error);
      alert("An error occurred while submitting the task marks.");
    }
  };

  return (
    <div>
      <div
        style={{ background: "#051f3e" }}
        className="content__container text-center"
      >
        <h3>Course Details</h3>
        <h4>{getCapitalize(course?.name)}</h4>
        <h6>{course?.code}</h6>
      </div>

      <div className="content__container">
        <div className="d-flex justify-content-between">
          <h3>Course Details</h3>
          <div>
            {user?.role !== "student" && (
              <>
                <Link
                  to={`/academics/projectgroup/add/${course?.code}/${classID}`}
                  className="btn blue__btn mx-2"
                >
                  Add New Project Group
                </Link>
                <Link
                  to={`/academics/lecture/add/${course?.code}/${classID}`}
                  className="btn blue__btn mx-2"
                >
                  Add New Lecture
                </Link>
                <Link
                  to={`/academics/courses/add/${course?.code}/${classID}`}
                  className="btn blue__btn mx-2"
                >
                  Add New Note
                </Link>
                <Link
                  to={`/academics/courses/sba/${course?.code}/${classID}`}
                  className="btn blue__btn mx-2"
                >
                  Course S.B.A
                </Link>
                <Link
                  to={`/academics/courses/report/${course?.code}/${classID}`}
                  className="btn blue__btn mx-2"
                >
                  Course Report
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="my-3">
          <button
            className="btn blue__btn"
            onClick={() => setShowNotes(!showNotes)}
          >
            {showNotes ? "Hide Course Notes" : "Show Course Notes"}
          </button>
        </div>

        <div className="my-3">
          <button
            className="btn blue__btn"
            onClick={() => setShowLecture(!showLecture)}
          >
            {showLecture ? "Hide Course Lectures" : "Show Course Lectures"}
          </button>
        </div>
        <div className="my-3">
          <button
            className="btn blue__btn"
            onClick={() => setShowProjectGroup(!showProjectGroup)}
          >
            {showProjectGroup ? "Hide Project Group" : "Show Project Group"}
          </button>
        </div>
        {showLecture && (
          <ListTable
            tableHeader={tableHeader}
            data={lecture}
            handleDelete={handleDeleteLecture}
            loading={loading}
            noActions={user?.role === "student"}
            isEdit={true}
            user={user?.id}
          />
        )}
        {showNotes && (
          <ListTable
            tableHeader={tableHeader}
            data={notes}
            handleDelete={handleDelete}
            loading={loading}
            noActions={user?.role === "student"}
            isEdit={true}
            user={user?.id}
          />
        )}
        {showProjectGroup && (
          <ProjectTable
            tableHeader={tableHeader}
            data={projectGroup}
            handleShowDetails={handleShowDetails}
            loading={loading}
            noActions={user?.role === "student"}
            isEdit={true}
            user={user?.id}
          />
        )}
      </div>
      {/* Modal for showing project details */}
      {modalVisible && selectedProject && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div
            className="modal-dialog modal-dialog-scrollable"
            style={{ width: "90%", maxWidth: "90%" }}
          >
            <div
              className="modal-content"
              style={{ maxHeight: "90vh", overflow: "hidden" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Project Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body" style={{ overflowY: "auto" }}>
                <h6>
                  <strong>Project Name:</strong> {selectedProject?.projectName}
                </h6>
                <p>
                  <strong>Project Details:</strong>{" "}
                  {selectedProject?.projectDetail}
                </p>

                <h6>
                  <strong>Group Members:</strong>
                </h6>
                <div className="d-flex flex-wrap">
                  {selectedProject?.students?.map((student) => (
                    <div
                      key={student._id}
                      className="d-flex align-items-center me-4 mb-3"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`}
                        alt={student.name}
                        className="rounded-circle me-2"
                        width={40}
                        height={40}
                      />
                      <div>
                        <div>
                          <strong>{student.name}</strong>
                        </div>
                        <div className="text-muted">{student.userID}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedProject?.Task?.length > 0 && (
                  <div className="mt-4">
                    <h6>
                      <strong>Tasks:</strong>
                    </h6>
                    <div className="d-flex flex-column gap-3">
                      {selectedProject.Task.map((task) => (
                        <div
                          key={task._id}
                          className="card shadow-sm w-100 border-0"
                          style={{
                            backgroundColor: "#f8f9fa",
                            borderRadius: "12px",
                          }}
                        >
                          <div className="d-flex flex-wrap align-items-start justify-content-between p-4">
                            {/* Left Block */}
                            <div style={{ flex: 2, minWidth: "250px" }}>
                              <h5 className="mb-1">{task.task}</h5>
                              <small className="text-muted">
                                Assigned to:{" "}
                                {typeof task.AssignTo === "object"
                                  ? `${task.AssignTo.name} (${task.AssignTo.userID})`
                                  : task.AssignTo}
                              </small>
                              <p className="mt-3 mb-2">
                                <strong>Description:</strong> <br />
                                {task.TaskDescription || "-"}
                              </p>
                              <p className="mb-1">
                                <strong>Remarks:</strong> {task.Remarks ?? "-"}
                              </p>
                            </div>

                            {/* Middle Block */}
                            <div style={{ flex: 1, minWidth: "180px" }}>
                              <p className="mb-2">
                                <span className="badge bg-info text-dark">
                                  {task.Progress || "Pending"}
                                </span>
                              </p>
                              <p className="mb-1">
                                <strong>Acquire #:</strong>{" "}
                                {task.AcquireNumber ?? "-"}
                              </p>
                              <p className="mb-1">
                                <strong>Total #:</strong>{" "}
                                {task.TotalNumber ?? "-"}
                              </p>
                            </div>

                            {/* Right Block */}
                            <div style={{ flex: 1, minWidth: "200px" }}>
                              <strong>Attachments:</strong>
                              <div className="d-flex flex-column mt-1">
                                {Array.isArray(task.Attachment) &&
                                task.Attachment.length > 0 ? (
                                  task.Attachment.map((file, idx) => (
                                    <a
                                      key={idx}
                                      href={file.url || "#"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-truncate text-primary"
                                      style={{ maxWidth: "180px" }}
                                    >
                                      📎 {file.name || `Attachment ${idx + 1}`}
                                    </a>
                                  ))
                                ) : (
                                  <span className="text-muted">
                                    No attachments
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Solution Section */}
                          {Array.isArray(task.Solution) &&
                            task.Solution.length > 0 && (
                              <div className="px-4 pb-3">
                                <h6 className="mt-3">
                                  <strong>Solutions:</strong>
                                </h6>
                                <div className="d-flex flex-column gap-2">
                                  {task.Solution.map((solution, solIdx) => (
                                    <div
                                      key={solIdx}
                                      className="p-3 border rounded bg-white"
                                      style={{ borderColor: "#dee2e6" }}
                                    >
                                      <p className="mb-2">
                                        <strong>Answer:</strong> <br />
                                        {solution.Answer || "-"}
                                      </p>
                                      <div>
                                        <strong>Attachments:</strong>
                                        <div className="d-flex flex-column mt-1">
                                          {Array.isArray(solution.Attachment) &&
                                          solution.Attachment.length > 0 ? (
                                            solution.Attachment.map(
                                              (file, idx) => (
                                                <a
                                                  key={idx}
                                                  href={file.url || "#"}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-truncate text-primary"
                                                  style={{ maxWidth: "180px" }}
                                                >
                                                  📎{" "}
                                                  {file.name ||
                                                    `Solution Attachment ${
                                                      idx + 1
                                                    }`}
                                                </a>
                                              )
                                            )
                                          ) : (
                                            <span className="text-muted">
                                              No attachments
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                          {/* Finish Task Button */}
                          <div className="px-4 pb-4">
                            {task.Progress !== "Completed" && (
                              <button
                                className="btn btn-success mt-2"
                                onClick={() => toggleFinishInput(task._id)}
                              >
                                {activeFinishInputs[task._id]
                                  ? "Cancel"
                                  : "Finished Task"}
                              </button>
                            )}

                            {activeFinishInputs[task._id] && (
                              <div className="mt-3 d-flex flex-column gap-2">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Enter Marks"
                                  onChange={(e) =>
                                    (task._tempMarks = e.target.value)
                                  }
                                />
                                <textarea
                                  className="form-control"
                                  rows="2"
                                  placeholder="Enter Remarks"
                                  onChange={(e) =>
                                    (task._tempRemarks = e.target.value)
                                  }
                                />
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    handleMarksSubmit(
                                      selectedProject._id,
                                      task._id,
                                      task._tempMarks,
                                      task._tempRemarks
                                    )
                                  }
                                >
                                  Submit
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowTaskForm(true)}
                  >
                    Add Task
                  </button>
                </div>

                {showTaskForm && (
                  <form className="mt-3" onSubmit={handleTaskSubmit}>
                    <div className="mb-2">
                      <label className="form-label">Task Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="task"
                        value={taskData.task}
                        onChange={handleTaskInputChange}
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Assign To</label>
                      <select
                        className="form-select"
                        name="AssignTo"
                        value={taskData.AssignTo}
                        onChange={handleTaskInputChange}
                        required
                      >
                        <option value="">Select a student</option>
                        {selectedProject?.students?.map((student) => (
                          <option key={student._id} value={student.userID}>
                            {student.name} ({student.userID})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Task Description</label>
                      <textarea
                        className="form-control"
                        name="TaskDescription"
                        rows="3"
                        value={taskData.TaskDescription}
                        onChange={handleTaskInputChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Task Total Number</label>
                      <textarea
                        className="form-control"
                        name="TotalNumber"
                        rows="1"
                        value={taskData.TotalNumber}
                        onChange={handleTaskInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Attachments</label>
                      <input
                        type="file"
                        multiple
                        className="form-control"
                        onChange={handleFileChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-success me-2">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowTaskForm(false)}
                    >
                      Cancel
                    </button>
                  </form>
                )}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {modalVisible && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default CourseDetails;
