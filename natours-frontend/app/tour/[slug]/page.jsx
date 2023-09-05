import React from 'react';
import TourPage from '@/components/TourPage';
import toursApi from '@/api/tours/toursApi';
import reviewsApi from '@/api/reviews/reviewsApi';
import jwtParser from '@/utility/jwtParser';

// export async function generateStaticParams() {
//   const tours = await toursApi.getTours();

//   let staticParams = {};

//   staticParams = tours.map(tour => ({
//     slug: tour.slug,
//   }));
//   staticParams.push({ fallback: false });

//   return staticParams;
// }

async function page({ params }) {
  const { slug } = params;
  const tour = await toursApi.getTourBySlug(slug);
  const reviews = await reviewsApi.getReviewsByTourId(tour.id);

  return (
    <>
      <TourPage params={params} tour={tour} reviews={reviews} />
    </>
  );
}

export default page;
