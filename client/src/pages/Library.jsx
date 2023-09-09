import "../styles/library.css";
import Filter from "../components/library/Filter";
import Videos from "../components/library/Videos";
import Slides from "../components/library/Slides";
import Exams from "../components/library/Exams";
import Scheme from "../components/library/Scheme";
import LessonPlan from "../components/library/LessonPlan";
const Library = () => {
  return (
    <>
      <Filter />
      <Videos />
      <Slides />
      <Exams />
      <Scheme />
      <LessonPlan />
    </>
  );
};

export default Library;
