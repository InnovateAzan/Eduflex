import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../store/axios";

function ProjectForm(props) {
  const { onSelectedUsersChange } = props; // Destructure the prop

  const { register, handleSubmit, errors } = useForm();
  const [classes, setclasses] = useState([]);
  const [courses, setcourses] = useState([]);
  const [selectedNames, setSelectedNames] = useState("");
  const [students, setstudents] = useState([]);
  const [classDetails, setclassDetails] = useState({});

  const names = students;
  console.log("names", names);

  useEffect(() => {
    axios.get("/classes").then((res) => {
      console.log(res.data);
      setclasses(res.data);
    });
  }, []);

  const handleSelect = (name) => {
    let updatedNames;
    if (selectedNames.includes(name.userID)) {
      // Deselect the clicked name
      updatedNames = selectedNames.filter((n) => n !== name);
    } else {
      if (selectedNames.length >= 4) {
        // Remove the first and add the new one
        updatedNames = [...selectedNames.slice(1), name];
      } else {
        // Just add the new one
        updatedNames = [...selectedNames, name];
      }
    }
    setSelectedNames(updatedNames);
    console.log("Updated Names:", updatedNames);

    onSelectedUsersChange(updatedNames); // Notify the parent
  };
  let {
    classID,
    setclass,
    subject,
    setsubject,
    topic,
    setProjectName,
    setProjectDetail,
    projectDetail,
    loading,
    handleAdd,
    handleReset,
    isEdit,
    role,
  } = props;
  useEffect(() => {
    const getData = async () => {
      await axios.get(`/classes/classCode/${classID}`).then((res) => {
        setclassDetails(res.data.docs);
      });
      await axios
        .get(`/students/class/${classID}`)
        .then(async (res) => {
          console.log("First Response ", res.data.users);
          await axios
            .post(`/notes/notAssignedGroup`, {
              students: res.data.users,
            })
            .then((res) => {
              console.log("Second Reponse", res.data.missingStudents);
              setstudents(res.data.missingStudents);
            })
            .catch((err) => {
              console.log("me operender", err);
            });
        })
        .catch((err) => {
          console.log("me operender", err);
        });
    };
    getData();
  }, [classID]);

  useEffect(() => {
    axios.get("/courses").then((res) => {
      setcourses(res.data);
    });
  }, []);
  return (
    <form className="row g-3" action="">
      {role === "admin" && (
        <>
          <div className="col-md-6">
            <label className="form-label">Select Class</label>
            <select
              value={classID}
              onChange={(e) => setclass(e.target.value)}
              name="class"
              className="form-select"
            >
              <option selected hidden>
                Choose...
              </option>
              {classes.length > 0 ? (
                classes.map((e) => (
                  <option value={e.classCode} key={e.classCode}>
                    {e.name}
                  </option>
                ))
              ) : (
                <option disabled>No classes available yet</option>
              )}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Select Subject</label>
            <select
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              name="class"
              className="form-select"
            >
              <option selected hidden>
                Choose...
              </option>
              {courses.length > 0 ? (
                courses.map((e) => (
                  <option value={e.code} key={e.code}>
                    {e.name}
                  </option>
                ))
              ) : (
                <option disabled>No courses available yet</option>
              )}
            </select>
          </div>
        </>
      )}

      <div className="col-12">
        <label className="form-label">Project Name</label>
        <input
          value={topic}
          ref={register({ required: true })}
          onChange={(e) => setProjectName(e.target.value)}
          type="text"
          className="form-control"
          name="topic"
        />
        {errors.topic && (
          <span className=" form-error text-danger mb-2">
            This field is required
          </span>
        )}
      </div>
      <div className="col-12">
        <label className="form-label">Project Details</label>
        <textarea
          value={projectDetail}
          onChange={(e) => setProjectDetail(e.target.value)}
          rows={5}
          className="form-control"
          id="topic"
        ></textarea>
      </div>
      <div className="col-12">
        <label className="form-label">
          Add Members To Project (Max Upto 4)
        </label>
        <div className="border p-2 rounded bg-white shadow w-64 mt-4">
          {names.map((name) => (
            <div
              key={name}
              className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(name)}
            >
              <span>
                {name.name} {name.surname}{" "}
              </span>
              {selectedNames.includes(name) && (
                <span className="text-green-600 font-bold">✔</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="col-12">
        <button
          onClick={handleSubmit(handleAdd)}
          className="btn blue__btn mr-3"
        >
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {isEdit ? "Save Changes" : "Add"}
        </button>
        <button onClick={handleSubmit(handleReset)} className="btn orange__btn">
          Reset
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
