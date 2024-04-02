import React from 'react';

const News = ({ date }) => {
  // Sample static data for news articles
  const newsData = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Dolor Sit Amet",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Consectetur Adipiscing",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Sed Do Eiusmod",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Tempor Incididunt",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "Ut Labore Et Dolore",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      title: "Quis Nostrud Exercitation",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "https://via.placeholder.com/300",
    },
  ];
  

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">News for {date}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((article) => (
          <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              <p className="text-gray-700">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
