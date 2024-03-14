import {
  createStyles,
  Text,
  Avatar,
  Group,
  Paper,
  rem,
  Badge,
  Rating,
} from "@mantine/core";
import dayjs from "dayjs";

export const reviewStyle = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    marginBottom: theme.spacing.xl,
  },

  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    "& > p:last-child": {
      marginBottom: 0,
    },
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    width: "100%",
  },

  rating: {
    flexGrow: "1",
    textAlign: "-webkit-right",
  },
}));

export function SingleReview({ time, text, author, rating }) {
  const { classes } = reviewStyle();

  const reviewTime = dayjs(time).format("DD-MM-YYYY");
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <div className={classes.header}>
          <Avatar
            src={`https://avatars.mds.yandex.net/get-yapic/${author.pic}/islands-middle`}
            alt={author.name}
            radius="xl"
          />
          <div>
            <Badge variant="filled" size="xs">
              {author.name}
            </Badge>
            <Text fz="xs" c="dimmed">
              {reviewTime}
            </Text>
          </div>

          <div className={classes.rating}>
            <Rating value={rating.val} readOnly />
          </div>
        </div>
      </Group>
      {text}
    </Paper>
  );
}
