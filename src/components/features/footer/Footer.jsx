import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import DefaultButton from "@/components/shared/buttons/DefaultButton/DefaultButton";
import {
  IconBrandTelegram,
  IconBrandVk,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import { WebAuthors } from "@/components/shared/WebAuthors/WebAuthors";
import MainLogo from "@/assets/icons/MainLogo";

const Footer = ({ footerColor = "white" }) => {
  return (
    <>
      <div className={styles[`footer_bg_${footerColor}`]}>
        <div className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__side}>
              <div className={styles.footer__side_left}>
                <div className={styles.wrapper_left}>
                  <div className={styles.row}>
                    <div className={styles.image_wrapper}>
                      <MainLogo width={80} height={84} />
                    </div>
                    <div className={styles.header_right}>
                      <span className={styles.title}>
                        Лаборатория головных уборов Веретено
                      </span>

                      <ul className={styles.info_list}>
                        <li className={styles.info_item}>
                          ОГРН 307616104500078
                        </li>
                        <li className={styles.info_item}>
                          ИНН 7707083893, КПП 616443001
                        </li>
                        <li className={styles.info_item}>
                          р/с 40802810052090032224
                        </li>
                        <li className={styles.info_item}>
                          Банк: Юго-Западный банк ПАО Сбербанк
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.image_wrapper}>
                      {/* <Image src={images.geo} width={48} height={48} /> */}
                    </div>
                    <a
                      className={styles.adress}
                      target="_blank"
                      href="https://yandex.ru/profile/-/CCUSREFYHC"
                    >
                      Адрес: Ростовская обл., г. Ростов-на-Дону, ул. Курская д.1
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer__side}>
              <div className={styles.footer__side_right}>
                <div className={styles.right_wrapper}>
                  <div className={styles.phone}>
                    <div className={styles.phone_image}>
                      <IconPhone color={"#9697ed"} />
                    </div>
                    <div className={styles.phone_title}>Телефон:</div>
                    <a className={styles.phone_number} href="tel:+79034331144">
                      +7 (903) 433-11-44
                    </a>
                    <div className={styles.social_list}>
                      <a
                        className={styles.social_icon}
                        target="_blank"
                        href="https://vk.com/vereteno_hats"
                      >
                        <IconBrandVk color={"#0077ff"} />
                      </a>
                      <a
                        className={styles.social_icon}
                        target="_blank"
                        href="https://t.me/+79034331144"
                      >
                        <IconBrandTelegram color={"#0088cc"} />
                      </a>
                      <a
                        className={styles.social_icon}
                        target="_blank"
                        href="https://wa.me/79034331144"
                      >
                        <IconBrandWhatsapp color={"#075E54"} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<WebAuthors/>*/}
      </div>
    </>
  );
};

export default Footer;
