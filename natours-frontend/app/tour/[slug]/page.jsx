import React from 'react';
import TourPage from '@/components/TourPage';
import toursApi from '@/api/tours/toursApi';

export async function generateStaticParams() {
  const tours = await toursApi.getTours();

  let staticParams = {};

  staticParams = tours.map(tour => ({
    slug: tour.slug,
  }));
  staticParams.push({ fallback: true });

  return staticParams;
}

async function page({ params }) {
  const { slug } = params;
  const tour = await toursApi.getTourBySlug(slug);

  return (
    <>
      <TourPage params={params} tour={tour} />
    </>
  );
}

export default page;
