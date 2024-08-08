import React from "react";

function OrderSuc({ order }) {
  console.log(order);
  const { ingredients , total , productName } = order;
  return (
    <div className="bg-[#CE2829] w-full h-full flex justify-center">
      <div>
        <h1 className="text-[86px] font-bold text-center text-white pt-16">
          SİPARİŞ Alındı
        </h1>
        <hr className="mt-14" />
        <div>
          <h2 className="text-[32px] font-bold text-center text-white mt-5">
            {productName}
          </h2>
          <div>
            <p className="text-xl text-white mt-5 px-36">
              Boyut : {order.size}
            </p>
            <p className=" text-xl text-white mt-4 px-36">
              Hamur : {order.dough}
            </p>
            <p className="text-xl text-white mt-4 px-36">
              Ek Malzemeler:{" "}
              {ingredients.map((item, index) => (
                <span key={index}>
                  {item}
                  {index < ingredients.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <div className="w-1/2 h-auto text-white py-11 px-12 text-center border">
              <h1>Sepet Toplamı</h1>
              <div className="flex justify-between mt-5">
                <p>Secimler</p>
                <p>25 Tl</p>
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-white font-bold">Toplam</p>
                <p className="text-white font-bold">{total}TL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuc;
