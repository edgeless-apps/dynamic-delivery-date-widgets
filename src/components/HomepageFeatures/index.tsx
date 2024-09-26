import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Shop settings",
    Svg: require("@site/static/img/warehouse.svg").default,
    description: (
      <>
        Set shop operations including order processing time and shipping
        blackout dates.
      </>
    ),
  },
  {
    title: "Widgets",
    Svg: require("@site/static/img/online-shopping.svg").default,
    description: (
      <>
        Create shipping widgets to display estimate delivery dates and shipping
        rates. Several templates to choose from and the ability to edit liquid
        supported html.
      </>
    ),
  },
  {
    title: "Shipping profiles",
    Svg: require("@site/static/img/delivery-truck.svg").default,
    description: (
      <>Setup shipping rates with transit times for each customer market.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className={styles.featureSvgWrapper}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
