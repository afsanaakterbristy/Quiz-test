import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import Quizs from './components/Quizs/Quizs';
import StatisticsChart from './components/StatisticsChart/StatisticsChart';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>,
          
        },
        {
          path:'/quizs/:quizsId',         
          loader:({params}) => {
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizsId}`)           
          },
           element:<Quizs></Quizs>,
        },
        {
          path: '/statisticschart',
           loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<StatisticsChart></StatisticsChart>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
