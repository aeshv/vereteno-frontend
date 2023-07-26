import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import DefaultButton from "@/components/shared/buttons/DefaultButton/DefaultButton";
import {IconBrandTelegram, IconBrandVk, IconPhone} from "@tabler/icons-react";
import {WebAuthors} from "@/components/shared/WebAuthors/WebAuthors";

const Footer = ({footerColor = "white"}) => {
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
                                            {/* <Image src={images.rsoColored} width={80} height={84} /> */}
                                        </div>
                                        <div className={styles.header_right}>
                                            <span className={styles.title}>Шляпы веретено</span>

                                            <ul className={styles.info_list}>
                                                <li className={styles.info_item}>ОГРН 1156313039134</li>
                                                <li className={styles.info_item}>
                                                    ИНН 6318006647, КПП 631601001
                                                </li>
                                                <li className={styles.info_item}>
                                                    р/с 40703810654400000678
                                                </li>
                                                <li className={styles.info_item}>
                                                    Банк: Южный банк ПАО Сбербанк России
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
                                            <IconPhone color={'#9697ed'}/>
                                        </div>
                                        <div className={styles.phone_title}>Телефон:</div>
                                        <a className={styles.phone_number} href="tel:+79094351234">
                                            +7 (909) 435-12-34
                                        </a>
                                        <div className={styles.social_list}>
                                            <a
                                                className={styles.social_icon}
                                                target="_blank"
                                                href="https://vk.com/vereteno_hats"
                                            >
                                                <IconBrandVk color={'#0077ff'}/>
                                            </a>
                                            <a
                                                className={styles.social_icon}
                                                target="_blank"
                                                href="https://t.me/"
                                            >
                                                <IconBrandTelegram color={'#2AABEE'}/>
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
