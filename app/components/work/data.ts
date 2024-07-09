// data.ts
export interface ImageData {
  id: number;
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
}

export const data: ImageData[] = [
  {
    id: 1,
    imageUrl: "/Border.png",
    altText: "Image 1",
    width: 500,
    height: 300,
  },
  {
    id: 2,
    imageUrl: "/linkedin.JPG",
    altText: "Image 2",
    width: 500,
    height: 300,
  },
  {
    id: 3,
    imageUrl: "/path-to-your-image3.jpg",
    altText: "Image 3",
    width: 500,
    height: 300,
  },
  {
    id: 4,
    imageUrl: "/path-to-your-image4.jpg",
    altText: "Image 4",
    width: 500,
    height: 300,
  },
];
