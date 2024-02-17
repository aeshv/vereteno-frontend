import Card from "@/components/entity/card/Card";
import { SimpleGrid } from "@mantine/core";
import { CarouselBanner } from "@/components/entity/carousel/CarouselBanner";
import { FaqWithBg } from "@/components/entity/faq/FaqWithBg";
import MainPageFeaturesContainer from "@/components/shared/features/MainPageFeaturesContainer/MainPageFeaturesContainer";
import BuyingWith from "@/components/features/product/blocks/BuyingWith/BuyingWith";
import BlurredBlock from "@/components/shared/BluredBlock/BlurredBlock";
import { productApi } from "@/api";
import { categoryApi } from "@/api/category";
import PageHead from "@/components/SEO/PageHead";
import { AboutAdvertisementBlock } from "@/components/shared/AboutAdvertisementBlock/AboutAdvertisementBlock";
import RedirectProductCard from "@/components/entity/card/RedirectProductCard";

export default function Home({ products, categories }) {
  return (
    <>
      <PageHead title={"Главная - Веретено, магазин головных уборов"} />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <CarouselBanner />

        {/*Categories block*/}
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "64rem", cols: 3, spacing: "sm" },
            { maxWidth: "28rem", cols: 2, spacing: "sm" },
            { maxWidth: "22rem", cols: 1, spacing: "sm" },
          ]}
        >
          {categories
            ?.filter((category) => category.level === 2)
            ?.map((category) => (
              <BlurredBlock
                title={category.name}
                key={category.id}
                id={category.id}
                {...category}
              />
            ))}
        </SimpleGrid>

        {/*Примущества*/}
        <MainPageFeaturesContainer />

        {/*Товары на главной*/}
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "68rem", cols: 3, spacing: "md" },
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm", px: "lg" },
          ]}
        >
          {products?.map((product) => (
            <Card
              {...product}
              href={`/products/${product.id}`}
              key={product.id}
            />
          ))}
          <RedirectProductCard />
        </SimpleGrid>

        {/*Раздел история*/}
        <AboutAdvertisementBlock />

        <BuyingWith title={"Часто покупают"} params={{}} />
        <FaqWithBg />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const products = await productApi.getProducts().then(({ data }) => {
    return data?.productVendorCodes;
  });

  const { categories } = await categoryApi.getAll().then(({ data }) => {
    return data;
  });
  return {
    props: {
      products,
      categories,
    },
  };
}
