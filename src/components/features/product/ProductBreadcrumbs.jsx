import { Breadcrumbs, createStyles, Text } from "@mantine/core";
import { useContext } from "react";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";
import Link from "next/link";

const BreadcrumbsStyles = createStyles((theme) => ({
  link: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.md,
    lineHeight: "20px",
    color: theme.colors[theme.primaryColor][4],

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  text: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.md,
    lineHeight: "20px",
    color: theme.colors.gray[6],
  },

  separator: {
    color: theme.colors.gray[4],
  },
}));

export const ProductBreadcrumbs = () => {
  const { product } = useContext(ProductInfoContext);
  const { classes } = BreadcrumbsStyles();


  function generateBreadcrumb(product, breadcrumbs = []) {
    if (!product) {
      return breadcrumbs;
    }

    if (product.category) {
      breadcrumbs.unshift({
        title: product.category.name,
        href: `/products?categories=${product.category.id}`,
      });

      if (product.category?.parent) {
        breadcrumbs.unshift({
          title: product.category?.parent.name,
          href: `/products?categories=${product.category?.parent.id}`,
        });

        return generateBreadcrumb(product.category?.parent, breadcrumbs);
      }
    }

    breadcrumbs.unshift({ title: "Каталог", href: "/products" });
    breadcrumbs.unshift({ title: "Главная", href: "/" });
    return breadcrumbs;
  }


  const items = generateBreadcrumb(product).map((link, index) => {
    if (link.href) {
      return (
        <Link href={link.href} key={index}>
          <Text className={classes.link}>{link.title}</Text>
        </Link>
      );
    } else {
      return (
        <Text className={classes.text} key={index}>
          {link.title}
        </Text>
      );
    }
  });

  return (
    <>
      <Breadcrumbs classNames={classes} mb={"xs"}>
        {items}
      </Breadcrumbs>
    </>
  );
};
