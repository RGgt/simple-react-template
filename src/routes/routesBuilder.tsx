import { MainLayout } from '../layouts/mainLayout';
import { ErrorPage } from '../pages/errorPage';
import { HomePage } from '../pages/homePage';
import { OtherPage } from '../pages/otherPage';

function createRoutes() {
  return [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: (
        <MainLayout>
          <ErrorPage />
        </MainLayout>
      ),
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/other', element: <OtherPage /> },
      ],
    },
  ];
}

export { createRoutes };
