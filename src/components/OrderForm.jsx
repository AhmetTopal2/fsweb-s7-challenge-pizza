import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

function OrderForm() {
  const ingredients = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Jambon",
    "Domates",
    "Jalapeno",
    "Beyaz Peynir",
    "Peynir",
  ];

  const formik = useFormik({
    initialValues: {
      size: "",
      dough: "",
      ingredients: [],
      note: "",
      basePrice: 25.90,
      quantity: 1,
    },
    validationSchema: Yup.object({
      size: Yup.string().required("Boyut seçimi zorunludur"),
      dough: Yup.string().required("Hamur seçimi zorunludur"),
      ingredients: Yup.array()
        .max(10, "En fazla 10 malzeme seçebilirsiniz")
        .required("En az bir malzeme seçmelisiniz"),
      note: Yup.string().max(200, "Sipariş notu en fazla 200 karakter olabilir"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();

    },
  });

  const calculateTotal = () => {
    const ingredientCost = formik.values.ingredients.length * 5;
    const total = (formik.values.basePrice + ingredientCost) * formik.values.quantity;
    return total;
  };

  const incrementQuantity = () => {
    formik.setFieldValue("quantity", formik.values.quantity + 1);
  };

  const decrementQuantity = () => {
    if (formik.values.quantity > 1) {
      formik.setFieldValue("quantity", formik.values.quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-12 mb-28">
      <form onSubmit={formik.handleSubmit} className="w-[590px]">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="font-bold text-xl">
              Boyut Seç <span className="text-[#CE2829]">*</span>
            </h1>
            <div className="flex gap-5 mt-5">
              {["S", "M", "L"].map((size, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => formik.setFieldValue("size", size)}
                  className={`w-[56px] h-[56px] border rounded-full ${
                    formik.values.size === size ? "bg-[#CE2829] text-white" : "bg-[#FAF7F2]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {formik.touched.size && formik.errors.size ? (
              <div className="text-red-500 mt-2">{formik.errors.size}</div>
            ) : null}
          </div>
          <div>
            <h1 className="font-bold text-xl mb-2">
              Hamur Seç <span className="text-[#CE2829]">*</span>
            </h1>
            <select
              name="dough"
              value={formik.values.dough}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CE2829]"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="thin">İnce Hamur</option>
              <option value="thick">Kalın Hamur</option>
              <option value="stuffed">Dolgu Hamur</option>
            </select>
            {formik.touched.dough && formik.errors.dough ? (
              <div className="text-red-500 mt-2">{formik.errors.dough}</div>
            ) : null}
          </div>
        </div>
        <div className="w-full mt-12">
          <h1 className="font-bold text-xl">
            Ek Malzemeler <span className="text-[#CE2829]">*</span>
          </h1>
          <p>En fazla 10 malzeme ekleyebilirsiniz. 5TL</p>
          <div className="grid grid-cols-3 gap-5 mt-10">
            {ingredients.map((item) => (
              <div key={item} className="flex items-center justify-start gap-2 hover:cursor-pointer hover:bg-gray-200 p-3 rounded-lg ">
                <input
                  type="checkbox"
                  id={item}
                  name="ingredients"
                  value={item}
                  checked={formik.values.ingredients.includes(item)}
                  onChange={formik.handleChange}
                  className="mr-2 w-10 h-10"
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
          {formik.touched.ingredients && formik.errors.ingredients ? (
            <div className="text-red-500 mt-2">{formik.errors.ingredients}</div>
          ) : null}
        </div>
        <div className="w-full mt-12">
          <h1 className="font-bold text-xl">
            Siparis Notu <span className="text-[#CE2829]">*</span>
          </h1>
          <input
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-6 w-full h-14 border rounded-md p-2"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
          {formik.touched.note && formik.errors.note ? (
            <div className="text-red-500 mt-2">{formik.errors.note}</div>
          ) : null}
        </div>
        <button type="submit" className="w-full h-14 bg-[#FDC913] rounded-md mt-10 text-white">
          Siparis Olustur
        </button>
      </form>
      <hr className="w-[590px] mt-10" />
      <div className="w-[590px] mt-10 flex gap-10">
        <div className="w-44 h-14 flex border rounded-md overflow-hidden">
          <button
            type="button"
            onClick={incrementQuantity}
            className="w-1/3 h-full bg-[#FDC913]"
          >
            +
          </button>
          <p className="w-1/3 h-full flex justify-center items-center">{formik.values.quantity}</p>
          <button
            type="button"
            onClick={decrementQuantity}
            className="w-1/3 h-full bg-[#FDC913]"
          >
            -
          </button>
        </div>
        <div className="w-full h-[255px] bg-[#FAF7F2] py-11 px-12">
          <h1>Sepet Toplamı</h1>
          <div className="flex justify-between mt-5">
            <p>Secimler</p>
            <p>{formik.values.ingredients.length * 5} TL</p>
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-[#CE2829] font-bold">Toplam</p>
            <p className="text-[#CE2829] font-bold">{calculateTotal().toFixed(2)} TL</p>
          </div>
          <button type="submit" className="w-full h-14 bg-[#FDC913] rounded-md mt-10 text-white">
            Siparis Olustur
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
