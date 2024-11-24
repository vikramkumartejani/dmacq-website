import Image from 'next/image';
import React from 'react';

const RelatedBlogs = () => {
  const blogs = [
    {
      image: '/assets/blogs/related-blog.svg',
      categories: ['Product Update', 'WorkFlows'],
      title: 'Robotic Process Automation (RPA) for GST Input Credit Claims: dMACQ Introduces ...',
      author: 'Kunal Deshpande',
      date: 'Jun 27, 2024',
      readTime: '8 min',
    },
    {
      image: '/assets/blogs/related-blog.svg',
      categories: ['Product Update', 'Digital Transformation'],
      title: 'Our Experiences with VAPT at dMACQ Software',
      author: 'Neha Sharma',
      date: 'Jul 15, 2024',
      readTime: '6 min',
    },
    {
      image: '/assets/blogs/related-blog.svg',
      categories: ['WorkFlows', 'Industry Trends'],
      title: 'The Power of AI/ML in Business Process Automation and Role of Document Management ...',
      author: 'Amit Verma',
      date: 'Aug 5, 2024',
      readTime: '7 min',
    },
  ];

  return (
    <div className="bg-[#F1F5FA] w-full lg:px-8 px-4">
      <div className="pt-[64px] pb-6 md:py-[96px] max-w-[1184px] mx-auto w-full">
        <h2 className="text-[#243547] leading-[40px] text-[24px] md:text-[36px] font-extrabold">You Might Like</h2>
        <div className="mt-6 md:mt-[44px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-[5px] overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={384}
                height={219}
                className="w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2">
                  {blog.categories.map((category, i) => (
                    <div key={i} className="bg-[#E3EAF3] rounded-lg px-2 py-1">
                      <h3 className="text-[#58728D] font-medium text-[12px] leading-[16px] tracking-[-0.005em]">
                        {category}
                      </h3>
                    </div>
                  ))}
                </div>
                <h1 className="mt-3 text-[20px] md:text-[22px] leading-[28px] text-[#243547] font-bold tracking-[-0.03em]">
                  {blog.title}
                </h1>
                <h3 className="mt-4 text-[#58728D] text-[14px] leading-[20px] font-medium tracking-[-0.005em]">
                  {blog.author} • {blog.date} • {blog.readTime}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
