import React from 'react';

import { NoFeatureLayout } from '@/components/layout/NoFeature';
import { NextPageWithLayout } from '@/models/common';
import Head from 'next/head';

const Billing: NextPageWithLayout = () => {
  return (
    <div className="">
      <Head>
        <title>Dash Board</title>
        <meta content="My page title" key="title" />
      </Head>
    </div>
  );
};

Billing.Layout = NoFeatureLayout;

export default Billing;
