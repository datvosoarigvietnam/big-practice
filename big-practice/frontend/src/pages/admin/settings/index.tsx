import React from 'react';

import { NoFeatureLayout } from '@/components/layout/NoFeature';
import { NextPageWithLayout } from '@/models/common';
import Head from 'next/head';

const Settings: NextPageWithLayout = () => {
  return (
    <Head>
      <title>Dash Board</title>
      <meta content="My page title" key="title" />
    </Head>
  );
};

Settings.Layout = NoFeatureLayout;

export default Settings;
