import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeView from 'components/HomeView/HomeView';
import ProductSearchResultView from 'components/ProductSearchResultView/ProductSearchResultView';
// import ProductDetailView from 'components/ProductDetailView/ProductDetailView';
import NotFoundView from 'components/NotFoundView/NotFoundView';

// export default (store) => (
export default () => (
  <Route path="/" component={ CoreLayout }>
    <IndexRoute component={ HomeView } />
    <Route path="/product-search-result" component={ ProductSearchResultView } />
    <Route path="/404" component={ NotFoundView } />
    <Redirect from="*" to="/404" />
  </Route>
);
    // <Route path="/product-search-result?keyword=:keyword&location=:location" component={ProductSearchResultView} />
    // <Route path="/product-search-result" component={ProductSearchResultView} />
    // <Route path="/product-detail?productId=:productId" component={ProductDetailView} />
