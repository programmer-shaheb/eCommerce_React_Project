import React from "react";
import FeatureProduct from "./FeatureProduct";
import classes from "./Feature.module.css";
import poster1 from "../../assets/banner-1.png";
import poster2 from "../../assets/banner-2.png";

const Feature = () => {
  const featureData = [
    {
      id: 1,
      title: "Everyday Fresh and Clean with Our Products",
      img: poster1,
    },
    {
      id: 2,
      title: "Make your Breakfast Healthy and Easy",
      img: poster2,
    },
    {
      id: 3,
      title: "The Best Organic Products Online",
      img: poster1,
    },
  ];

  return (
    <>
      <section className={classes.feature}>
        <div className={classes.container}>
          <div className={classes.row}>
            {featureData.map((item) => {
              return (
                <FeatureProduct
                  key={item.id}
                  title={item.title}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
