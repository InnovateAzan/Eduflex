import React, { useState } from "react";
import ProjectForm from "../../AdminComponents/academics/notes/ProjectForm";

import axios from "../../store/axios";
import { errorAlert, successAlert } from "../../utils";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { useParams } from "react-router-dom";

function AddCourseGroup() {
  const [projectName, setProjectName] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const handleSelectedUsers = (users) => {
    setSelectedUser(users);
    console.log("Selected Users:", users); // Debugging
  };

  const user = useSelector(selectUser);
  const [loading, setloading] = useState(false);
  const { id, classID } = useParams();
  console.log(useParams());
  console.log("selected user this time", selectedUser);
  console.log("saghds");
  const handleAddNote = async () => {
    setloading(true);

    await axios
      .post("/notes/createGroup", {
        projectName,
        courseID: id,
        classID,
        projectDetail,
        senderID: user?.id,
        students: selectedUser,
      })
      .then((response) => {
        if (response.data.error) {
          errorAlert(response.data.error);
          setloading(false);
          return 0;
        }
        successAlert("notes successfully added");
        setloading(false);
        handleResetNote();
      })

      .catch((err) => {
        console.log(err);
        setloading(false);
        errorAlert("File is too big");
      });
  };

  const handleResetNote = () => {
    setProjectName("");
    setProjectDetail("");
  };

  return (
    <>
      <div className="content__container mb-5">
        <h3>Add New Project Group</h3>
        <ProjectForm
          classID={classID}
          projectName={projectName}
          setProjectName={setProjectName}
          loading={loading}
          handleReset={handleResetNote}
          role={user?.role}
          handleAdd={handleAddNote}
          projectDetail={projectDetail}
          onSelectedUsersChange={handleSelectedUsers}
          setProjectDetail={setProjectDetail}
        />
      </div>
    </>
  );
}

export default AddCourseGroup;
