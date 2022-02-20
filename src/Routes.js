import { Routes as RouterRoutes, Route } from 'react-router-dom';
import React from 'react';
import { Spinner } from 'reactstrap';
import FavouriteRecipesPage from './pages/FavouriteRecipesPage';

const RecipeListPage = React.lazy(() => import('./pages/RecipeListPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const RecipeDetailPage = React.lazy(() => import('./pages/RecipeDetailPage'));
const RecipeEditPage = React.lazy(() => import('./pages/RecipeEditPage'));

export function Routes() {
  return (
    <React.Suspense
      fallback={
        <Spinner color="danger" className="spinner">
          Loading...
        </Spinner>
      }
    >
      <RouterRoutes>
        <Route index element={<RecipeListPage />} />
        <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
        <Route path="/recipe/:slug/edit" element={<RecipeEditPage />} />
        <Route path="/novy-recept" element={<RecipeEditPage />} />
        <Route path="/oblubene" element={<FavouriteRecipesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </RouterRoutes>
    </React.Suspense>
  );
}
