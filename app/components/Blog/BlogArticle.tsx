import React from 'react';

interface BlogArticleProps {
  imageSrc: string;
  iconSrc: string;
  title: string;
  category?: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ imageSrc, iconSrc, title, category }) => {
  return (
    <article className="flex overflow-hidden relative flex-col grow md:justify-center py-4 justify-start px-10  text-white min-h-[517px] max-md:px-5  md:mt-8 max-md:max-w-full">
      <img loading="lazy" src={imageSrc} alt="" className="absolute inset-0 size-[400px] md:size-full rounded-3xl md:rounded-none w-full" />
      <div className="flex relative flex-col pr-7 max-md:pr-5 max-md:max-w-full">
        <img loading="lazy" src={iconSrc} alt="" className="self-center max-w-full aspect-square w-[200px] md:w-[317px]" />
        <h2 className="justify-center mt-3.5 text-xl md:text-2xl font-medium tracking-tight leading-8 max-md:max-w-full">
          {title}
        </h2>
        {category && (
          <p className=" mt-6 md:mt-1 8text-xs md:text-sm tracking-wider leading-5 uppercase max-md:max-w-full">
            {category}
          </p>
        )}
      </div>
    </article>
  );
};

export default BlogArticle;