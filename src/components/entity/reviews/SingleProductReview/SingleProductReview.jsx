import { Avatar, Badge, Group, Paper, Rating, Text } from "@mantine/core";
import { reviewStyle } from "@/components/widget/SingleReview/SingleReview";

export const SingleProductReview = ({ user, comment, rating }) => {
  const { classes } = reviewStyle();
  return (
    <>
      <Paper withBorder radius="md" className={classes.comment}>
        <Group>
          <div className={classes.header}>
            <Avatar src={user?.profile_image} alt={user.name} radius="xl" />
            <div>
              <Badge variant="filled" size="xs">
                {user.name ? user.name : "Аноним"} {user.surname}
              </Badge>
            </div>

            <div className={classes.rating}>
              <Rating value={rating} readOnly />
            </div>
          </div>
        </Group>
        {comment}
      </Paper>
    </>
  );
};
