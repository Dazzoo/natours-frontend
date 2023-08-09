import React from 'react';
import TourPage from '@/components/TourPage';
import getTourBySlug from '@/api/tours/getTourBySlug';
import getTours from '@/api/tours/getTours';

export async function generateStaticParams() {
  const tours = await getTours();

  let staticParams = {};

  staticParams = tours.map(tour => ({
    slug: tour.slug,
  }));
  staticParams.push({ fallback: true });

  return staticParams;
}

async function page({ params }) {
  const { slug } = params;
  const tour = await getTourBySlug(slug);

  return (
    <>
      <TourPage params={params} tour={tour} />
    </>
  );
}

export default page;
