import React,{useState,useEffect} from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
// import pickle1 from "../../Assets/pickle1.png";
// import pickle2 from "../../Assets/pickle2.png";
// import './slider.css'
// import pickle3 from "../../Assets/pickle3.png";
// import pickle4 from "../../Assets/pickle4.png";
// import pickle5 from "../../Assets/pickle5.png";
// import pickle6 from "../../Assets/pickle6.png";
// import pickle7 from "../../Assets/pickle7.jpeg";
// import pickle8 from "../../Assets/pickle8.png";

// import pickle9 from "../../Assets/pickle9.png";
// import pickle10 from "../../Assets/pickle10.jpeg";
// import Fab from "@material-ui/core/Fab";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";












export const data = [
    {
      id: 1,
      title: "LP & Token Locker",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    //   imageUrl: pickle1
    },
    {
      id: 2,
      title: "Unique Swap",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    //   imageUrl: pickle2
    },
    {
      id: 3,
      title: "Token Creator",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    //   imageUrl: pickle3
    },
    {
      id: 4,
      title: "Token Launchpad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    //   imageUrl: pickle4
    },
    {
      id: 5,
      title: "NFT Launchpad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    //   imageUrl: pickle5
    },
    {
      id: 6,
      title: "Charting Tool",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    //   imageUrl: pickle6
    },
   
  ];


export default function ResponsiveCarousel(props) {
  const ref = React.useRef();
  const [autoMoveInterval, setAutoMoveInterval] = useState(null);

  useEffect(() => {
    // Start auto-move interval when component mounts
    const intervalId = setInterval(() => {
      // Call goNext() method to move to the next slide
      ref.current?.goNext();
    }, 3000); // Adjust the interval duration as needed (e.g., 3000 ms for 3 seconds)

    setAutoMoveInterval(intervalId);

    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="slider-container">
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 780) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              fadeDistance={0}
            slideWidth={parentWidth < 840 ? parentWidth - 340 : 450}
              carouselWidth={parentWidth}
              data={data}
              
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={7}
              useGrabCursor
            />
          );
        }}
      />
      <>
        {/* <Fab
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <BsArrowLeft />
        </Fab>
        <Fab
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <BsArrowRight />
        </Fab> */}
      </>
    </div>
    </div>
  );
}
export const Card = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { imageUrl } = data[dataIndex];
    return (
      <div
        style={{
          width: "100%",
          height: 200,
        //   userSelect: "none",
        }}
        className={`my-slide-component  gradient p-11`}
      >
       <h2 className="p-11">{data[dataIndex].title}</h2>
      </div>
    );
  });