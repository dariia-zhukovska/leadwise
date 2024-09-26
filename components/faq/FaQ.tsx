import { useState } from "react";
import AccordionItem from "./accordion-item/AccordionItem";
import { accordionData } from "@app/api/mockedData";
import styles from "./styles.module.scss";

const FaQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.topFaQ}>
        <h1 className={styles.title}>FAQ</h1>
        <p className={styles.description}>
          Everything you need to know about the service and billing. Can&rsquo;t
          find the answer you&rsquo;re looking for? Please chat to our team.
        </p>
      </div>
      <div className={styles.faqData}>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={item.id}
            open={open === index}
            toggle={() => toggle(index)}
            title={item.title}
            description={item.description}
            // isDescriptionList={
            //   item.description.descriptionList.length > 0 ? true : false
            // }
            descriptionList={item.description.descriptionList}
            descriptionTitle={item.description.descriptionTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default FaQ;
