import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AddCoursePage from "../src/pages/AddCoursePage";
import CourseDetails from './pages/CourseDetailsPage';
import EditCourse from './pages/EditCoursePage';
import { courseLoader } from './pages/CourseDetailsPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <MainLayout /> } >
      <Route index element={ <HomePage /> } />
      <Route path="/AddCourse" element={ <AddCoursePage /> } />
      <Route path="/CourseDetails/:id" element={ <CourseDetails /> } loader={courseLoader} />
      <Route path="/EditCourse/:id" element={ <EditCourse/>} loader={courseLoader}/>
    </Route>
  )
);

const App = () =>  {
  return <RouterProvider router={router}/>
};

export default App;
