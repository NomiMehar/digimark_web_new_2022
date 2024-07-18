'use client';
 
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useRouter } from '@pyra/vercel-segment/navigation';
 
export function Insights() {
  const router = useRouter();
 
  return <SpeedInsights route={router.pathname} />;
}