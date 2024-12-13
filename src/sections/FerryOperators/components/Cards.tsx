import React from 'react';
import Image from 'next/image';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import BlueStar from '../../../../public/images/bluestar.jpg';

const cardsData = [
  {
    id: 1,
    ferryTitle: "Blue Star Ferries",
    operatesIn: 'Greece',
    vesselsNumber: 8,
    ferryTypes: "8 normal",
    popularVessels: 'Blue star Delos, Blue Star naxos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    imageSrc: "/images/bluestar.jpg"
  },
  {
    id: 2,
    operatesIn: 'USA',
    ferryTitle: "Seajets",
    vesselsNumber: 10,
    ferryTypes: "8 normal",
    popularVessels: 'Liberty Star, Freedom Star',
    description: 'Cras venenatis euismod malesuada. Sed porttitor ex eu augue dictum, at congue arcu auctor.',
    imageSrc: "/images/pic2.jpg"
  },
  {
    id: 3,
    operatesIn: 'Canada',
    ferryTitle: "Anek-Superfast",
    vesselsNumber: 12,
    ferryTypes: "8 normal",
    popularVessels: 'Victoria Star, Atlantic Star',
    description: 'Nullam malesuada erat ut turpis consequat gravida. Fusce nec ante libero. Etiam consectetur eros ac venenatis suscipit.',
    imageSrc: "/images/pic3.jpg"
  },
];

const Cards = () => {
  return (
    <div className='space-y-6 '>
    {cardsData.map((card) => (
    <div key={card.id} className="flex-1 border bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="bg-gray-100  lg:flex items-center justify-between mb-2 p-2">
      <Image src={card.imageSrc} alt="img1" width={200} height={200} />
      <div>
        <h2 className="text-xl font-bold">{card.ferryTitle}</h2>
        <span className="text-sm">
          ⭐⭐⭐⭐⭐ by 1,342 customers
        </span>
      </div>
    </div>
    <div className="lg:flex justify-between">
      <div className="w-full lg:w-1/3 space-y-4 mb-4 p-2">
        <div>
          <h3 className="text-sm text-gray-800">Operates in</h3>
          <h3 className="text-sm text-gray-600">{card.operatesIn}</h3>
        </div>
        <div>
          <h3 className="text-sm text-gray-800">
            Vessels number: {card.vesselsNumber}
          </h3>
          <h3 className="text-sm text-gray-600">
            Ferry types: {card.ferryTypes}
          </h3>
        </div>
        <div>
          <h3 className="text-sm text-gray-800">
            Popular vessels: {card.popularVessels}
          </h3>
          <h3 className="text-sm text-sky-500">
            Blue star Delos, Blue Star naxos
          </h3>
        </div>
      </div>
      <div className='flex-1 border-b-2'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum. Cras venenatis
          euismod malesuada. Sed porttitor ex eu augue dictum, at
          congue arcu auctor. Nullam malesuada erat ut turpis
          consequat gravida. Fusce nec ante libero. Etiam
          consectetur eros ac venenatis suscipit. Integer ut turpis
          a mauris lacinia aliquet a sed justo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum. Cras venenatis
        </p>
      </div>
    </div>
    <div className="p-4 space-x-2 border-gray-200 flex items-center justify-end">
      <span className="text-sky-500 text-sm">
        More About Blue Star Ferries
      </span>
     < ArrowCircleRightOutlinedIcon sx={{color: "skyblue"}}/>
    </div>
  </div>
       ))}
       </div>
  );
};

export default Cards;
