import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'events', element: <EventsPage />},
      {path: 'events/:eventId', element: <EventDetailPage />},
      {path: 'events/new', element: <NewEventPage />},
      {path: 'events/:eventId/edit', element: <EditEventPage />}
    ]
  }
])
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
