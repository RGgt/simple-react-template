import { MainLayout } from '../layouts/mainLayout';
import { ErrorPage } from '../pages/errorPage';
import { HomePage } from '../pages/homePage';
import { OtherPage } from '../pages/otherPage';

function createRoutes() {
  return [
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
      errorElement: (
        <MainLayout>
          <ErrorPage />
        </MainLayout>
      ),
    },
    {
      path: '/other',
      element: (
        <MainLayout>
          <OtherPage />
        </MainLayout>
      ),
    },
  ];
}

export { createRoutes };
