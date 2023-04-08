import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./HatFilter.module.scss";
import PriceRange from "@/components/features/filters/PriceRange/PriceRange";
import { RangeSlider, Slider, Switch } from "@mantine/core";

const HatFilter = ({ onSubmit }) => (
  <div className={styles.container}>

    <Formik
      initialValues={{
        priceMin: "",
        priceMax: "",
        forWhom: "",
        colors: [],
        materials: [],
        sizes: [],
      }}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form style={{ width: "100%" }}>
          <div className={styles.block}>
            <h2 className={styles.block__title}>Цена</h2>
            <PriceRange />
          </div>
          <div>
            <label htmlFor="priceMin">Price min</label>
            <Field name="priceMin" type="number" />
          </div>
          <div>
            <label htmlFor="priceMax">Price max</label>
            <Field name="priceMax" type="number" />
          </div>
          <div>
            <label>For whom</label>
            <div>
              <label>
                <Field type="radio" name="forWhom" value="men" />
                Men
              </label>
            </div>
            <div>
              <label>
                <Field type="radio" name="forWhom" value="women" />
                Women
              </label>
            </div>
            <div>
              <label>
                <Field type="radio" name="forWhom" value="unisex" />
                Unisex
              </label>
            </div>
          </div>
          <div>
            <label>Colors</label>
            <div>
              <label>
                <Field type="checkbox" name="colors" value="red" />
                Red
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="colors" value="blue" />
                Blue
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="colors" value="green" />
                Green
              </label>
            </div>
          </div>
          <div>
            <label>Materials</label>
            <div>
              <label>
                <Field type="checkbox" name="materials" value="wool" />
                Wool
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="materials" value="cotton" />
                Cotton
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="materials" value="synthetics" />
                Synthetics
              </label>
            </div>
          </div>
          <div>
            <label>Sizes</label>
            <div>
              <label>
                <Field type="checkbox" name="sizes" value="S" />S
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="sizes" value="M" />M
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="sizes" value="L" />L
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default HatFilter;
