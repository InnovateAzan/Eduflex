import React from "react";

const Dashboard = React.lazy(() =>
  import("../../TeachersComponents/dashboard/Index")
);

//profile
const EditProfile = React.lazy(() =>
  import("../../TeachersComponents/dashboard/EditProfile")
);
const Profile = React.lazy(() =>
  import("../../TeachersComponents/dashboard/Profile")
);
const Payrow = React.lazy(() =>
  import("../../TeachersComponents/dashboard/Payrow")
);
const StudentDetails = React.lazy(() =>
  import("../../AdminComponents/students/studentDetails/StudentDetails")
);

//messages
const Attendance = React.lazy(() =>
  import("../../TeachersComponents/attendance/Attendance")
);

//attendance
const Messages = React.lazy(() =>
  import("../../TeachersComponents/message/Messages")
);
const MessageAdmin = React.lazy(() =>
  import("../../TeachersComponents/message/MessageAdmin")
);
const MessageStudent = React.lazy(() =>
  import("../../TeachersComponents/message/MessageStudent")
);
const Chat = React.lazy(() => import("../../AdminComponents/messages/Chat"));
//settings
const Settings = React.lazy(() =>
  import("../../TeachersComponents/settings/SettingsPage")
);

//notification
const Notifications = React.lazy(() =>
  import("../../TeachersComponents/notifications/Notification")
);

//academics
const Classes = React.lazy(() =>
  import("../../TeachersComponents/academics/AllClasses")
);

const ClassDetails = React.lazy(() =>
  import("../../TeachersComponents/academics/ClassDetails")
);
const ClassesAttendance = React.lazy(() =>
  import("../../components/class/AttendancePastRecords")
);
const ClassesRecordAttendance = React.lazy(() =>
  import("../../components/class/RecordAttendance")
);
const Courses = React.lazy(() =>
  import("../../TeachersComponents/academics/AllCourses")
);
const CourseDetails = React.lazy(() =>
  import("../../TeachersComponents/academics/CourseDetails")
);
const AddCourseNotes = React.lazy(() =>
  import("../../TeachersComponents/academics/AddCourseNote")
);
const AddCourseLecture = React.lazy(() =>
  import("../../TeachersComponents/academics/AddCourseLecture")
);
const AddCourseProjectGroup = React.lazy(() =>
  import("../../TeachersComponents/academics/AddCourseGroup")
);
const ViewCalendar = React.lazy(() =>
  import("../../AdminComponents/academics/calender/ViewCalendar")
);
const Calendar = React.lazy(() =>
  import("../../AdminComponents/academics/calender/Calender")
);

const SBA = React.lazy(() => import("../../TeachersComponents/academics/SBA"));

const CourseReports = React.lazy(() =>
  import("../../TeachersComponents/academics/CourseReport")
);

//canteen
const Canteen = React.lazy(() =>
  import("../../StudentComponents/finances/Canteen")
);
const CanteenFees = React.lazy(() =>
  import("../../AdminComponents/canteen/PaymentPlan")
);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/canteen",
    name: "Canteen",
    exact: true,
    component: Canteen,
  },
  {
    path: "/finance/canteen/pricing",
    name: "Canteen Pricing",
    component: CanteenFees,
  },
  {
    path: "/messages",
    name: "Messages",
    exact: true,
    component: Messages,
  },
  {
    path: "/messages/chat",
    exact: true,
    name: "Messages",
    component: Chat,
  },
  {
    path: "/messages/chat/:id",
    name: "Messages",
    component: Chat,
  },
  {
    path: "/students/:id",
    name: "Student Details ",
    component: StudentDetails,
  },
  {
    path: "/messages/admin",
    name: "Messages",
    component: MessageAdmin,
  },
  {
    path: "/messages/student",
    name: "Messages",
    component: MessageStudent,
  },
  {
    path: "/message/:id",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/academics/classes",
    name: "Classes",
    component: Classes,
    exact: true,
  },
  {
    path: "/academics/classes/attendance/:id",
    name: "Class Attendance",
    component: ClassesAttendance,
    exact: true,
  },
  {
    path: "/academics/classes/attendance/record/:id",
    name: "Record Classes Attendance",
    component: ClassesRecordAttendance,
    exact: true,
  },
  {
    path: "/academics/classes/:id",
    name: "Classes Details",
    component: ClassDetails,
  },

  {
    path: "/academics/courses",
    name: "Courses",
    exact: true,
    component: Courses,
  },
  {
    path: "/academics/courses/add/:id/:classID",
    name: "Courses Notes",
    component: AddCourseNotes,
  },
  {
    path: "/academics/lecture/add/:id/:classID",
    name: "Courses Lecture",
    component: AddCourseLecture,
  },
  {
    path: "/academics/projectgroup/add/:id/:classID",
    name: "Courses",
    component: AddCourseProjectGroup,
  },
  {
    path: "/academics/calendar",
    name: "Courses",
    exact: true,
    component: Calendar,
  },
  {
    path: "/academics/calender/view",
    name: "View Calendar",
    component: ViewCalendar,
  },
  {
    path: "/academics/courses/:id/:classID",
    name: "Course Details",
    exact: true,
    component: CourseDetails,
  },
  {
    path: "/academics/courses/sba/:id/:classID",
    name: "Course SBA",
    component: SBA,
  },
  {
    path: "/academics/courses/report/:id/:classID",
    name: "Course Report",
    component: CourseReports,
  },
  {
    path: "/profile",
    exact: true,
    name: "Course Details",
    component: Profile,
  },
  {
    path: "/profile/edit",
    name: "Course Details",
    component: EditProfile,
  },
  {
    path: "/payrow",
    name: "Course Details",
    component: Payrow,
  },
  {
    path: "/attendance",
    name: "Attendance",
    component: Attendance,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
];

export default routes;
