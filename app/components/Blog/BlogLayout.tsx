import React from 'react';
import BlogArticle from './BlogArticle';
// import FolderMobile from "../../public/folder-phone-reverse.webp";
import Crown from "../public/assets/folderone.svg";
import CrownTwo from "../public/assets/foldertwo.svg";


const BlogLayout: React.FC = () => {
  return (
    <main className="flex flex-col justify-center">
      <section className=" w-full  max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <BlogArticle
              imageSrc={'/assets/folder.png'}
              iconSrc="/assets/folderone.svg"
              title="How to build a product — a full guide to the product development process"
              category="Development"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <BlogArticle
              imageSrc={'/assets/folder.webp'}
              iconSrc="/assets/foldertwo.svg"
              title="Tech stack for web development: how to arrange it correctly"
              category="Development"

            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogLayout;