'use client';

import { SpeedInsights } from '@vercel/speed-insights/react';
import * as navigation from 'next/navigation';

const { useRouter } = navigation;

export function Insights() {
  const router = useRouter();

  return <SpeedInsights route={router.pathname} />;
}
