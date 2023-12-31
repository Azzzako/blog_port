import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function NotFoundPage() {
  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export function Head() {
  return <Seo title="404: Not Found" />;
}

export default NotFoundPage;
