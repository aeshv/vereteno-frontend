import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import Label from "../../shared/label/Label";
import ColorDot from "../../shared/ColorDot/ColorDot";
import CardGallery from "./CardGallery/CardGallery";
import Link from "next/link";
import noimage from "../../../../public/noimage.png";

const Card = (props) => {

	const noimageArray = [{src: noimage}]

	return (<Link className={styles.card} href={props?.href}>

			{props.images ? (
				<div className={styles.gallery}>
					<CardGallery images={props.images}/>
				</div>) :
				(<div className={styles.gallery}>
					<CardGallery images={noimageArray}/>
				</div>)
			}

			<div className={styles.content}>
				<div className={styles.row}>
					<span className={styles.title}>{props?.title || props?.name}</span>
				</div>
				<div className={styles.row}>
					<span className={styles.price}>{props?.description}</span>
				</div>
				{props?.colors?.length && (<>
						<div className={styles.row}>
              <span className={styles.colors}>
                {props?.colors?.map(({color}) => (<>
										<ColorDot color={color}/>
									</>))}
              </span>
						</div>
					</>)}
				<div className={styles.row}>
					<span className={styles.price}>{props?.price}руб.</span>
				</div>
			</div>
		</Link>);
};

export default Card;

{
	/* <div className={styles.labels}>
					<Label type={'green'}>Новинка</Label>
					<Label type={'red'}>Хит</Label>
					<Label type={'yellow'}>Рассрочка</Label>
				</div> */
}

{
}
