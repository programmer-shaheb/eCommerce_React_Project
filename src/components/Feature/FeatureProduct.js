import React from "react";
import { ButtonSecondary, Flex } from "../../Global.styled";
import classes from "./Feature.module.css";
import { BsArrowRightShort } from "react-icons/bs";

const FeatureProduct = ({ title, img }) => {
  return (
    <>
      <div className={classes.col}>
        <div className={classes.featureIMG}>
          <img src={img} alt="" />
          <div className={classes.featureTXT}>
            <h4>
              Everyday Fresh and
              <br />
              Clean with Our
              <br />
              Products
            </h4>
            <ButtonSecondary
              padding="6px 14px"
              radius="3px"
              className={classes.btn}
            >
              <Flex>
                <span>Shop Now </span>
                <BsArrowRightShort className={classes.arrow} />
              </Flex>
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
