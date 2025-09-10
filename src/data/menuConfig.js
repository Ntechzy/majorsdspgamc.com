import {
  User, Stethoscope, GraduationCap, Users, FileText,
  BookOpen, Presentation, ClipboardList, Award,
  Activity, BarChart3, Image, Video
} from "lucide-react";

export const menuConfig = {
  ncism: {
    title: "NCISM Mandates",
    icon: Activity,
    items: [
      { label: "Principal and Medical Superintendent", icon: User, type: "table", api: "/principal" },
      { label: "Teaching Staff", icon: GraduationCap, type: "table", api: "/teaching-staff" },
      { label: "Intake Capacity", icon: ClipboardList, type: "table", api: "/intake-capacity" },
      { label: "Non Teaching Staff", icon: Users, type: "table", api: "/non-teaching" },
      { label: "Student Details", icon: FileText, type: "table", api: "/students" },
      { label: "Research Publication", icon: BookOpen, type: "table", api: "/research" },
      { label: "Conferences and Academic Activities", icon: Presentation, type: "table", api: "/conferences" },
      { label: "Attendance Report", icon: ClipboardList, type: "table", api: "/attendance" },
      { label: "Affiliations", icon: Award, type: "file", api: "/affiliations" },
      { label: "Clinical Material in Hospital", icon: Stethoscope, type: "table", api: "/clinical-material" },
      { label: "Hospital Month wise OP/IP Statistics", icon: BarChart3, type: "table", api: "/hospital-stats" },
    ],
  },
  media: {
    title: "Media",
    icon: Image,
    items: [
      { label: "Image Gallery", icon: Image, type: "file", api: "/images" },
      { label: "Video Gallery", icon: Video, type: "file", api: "/videos" },
    ],
  },
  hospital: {
    title: "Hospital Clinical Data",
    icon: Stethoscope,
    items: [
      { label: "Hospital OPD/IPD Data", icon: Stethoscope, type: "table", api: "/hospital-opd" },
      { label: "Other Hospital Data", icon: Stethoscope, type: "table", api: "/hospital-other" },
    ],
  },
};
