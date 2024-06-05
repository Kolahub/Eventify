import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventLoader } from './pages/EventsPage';
import EventDetailPage, { loader as eventDetailsLoader, action as deleteEventAction} from './pages/EventDetailPage';
import NewEventPage, { action as newEventAction } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailsLoader,
            children: [
              { 
                index: true, 
                element: <EventDetailPage />, 
                action: deleteEventAction
            },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
