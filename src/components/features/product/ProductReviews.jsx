import React, { useContext } from "react";
import { createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormReviewToProduct } from "@/components/features/FormReviewToProduct/FormReviewToProduct";
import { EmptyReviewList } from "@/components/entity/reviews/EmptyReviewList/EmptyReviewList";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";
import { SingleProductReview } from "@/components/entity/reviews/SingleProductReview/SingleProductReview";
import { useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  title: {
    fontFamily: "Jost",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "35px",
    lineHeight: "51px",
    textTransform: "uppercase",
    color: "#282739",
    marginBottom: "30px",
  },
}));

const ProductReviews = () => {
  const { classes: styles, theme, cx } = useStyles();
  const ctx = useContext(ProductInfoContext);
  const { user } = useSelector((state) => state.auth);
  const { product } = ctx;
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Отзывы</h3>
        {product?.feedbacks?.length > 0 ? (
          <div className={styles.list}>
            {product.feedbacks.map((review, index) => (
              <SingleProductReview key={index} {...review} />
            ))}
          </div>
        ) : (
          <EmptyReviewList />
        )}

        {!!user ? (
          <>
            <h3 className={styles.title}> Оставить отзыв</h3>
            <FormReviewToProduct />
          </>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default ProductReviews;
