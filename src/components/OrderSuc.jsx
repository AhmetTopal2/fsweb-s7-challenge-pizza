import React from "react";

function OrderSuc() {
  return (
    <div className="bg-[#CE2829] w-full h-full flex justify-center">
      <div>
        <h1 className="text-[86px] font-bold text-center text-white pt-16">
          SİPARİŞ Alındı
        </h1>
        <hr className="mt-14" />
        <div>
          <h2 className="text-[32px] font-bold text-center text-white mt-5">
            Position Absolute Acı Pizza
          </h2>
          <div>
            <p className="text-xl text-white mt-5 px-36">Boyut : L</p>
            <p className=" text-xl text-white mt-4 px-36">Hamur : İnce</p>
            <p className="text-xl text-white mt-4 px-36">
              Ek Malzemeler: Pepperoni, Sosis, Mısır, Ananas, Jalepeno
            </p>
          </div>
          <div className="flex justify-center mt-6" >
            <div className="w-1/2 h-auto text-white py-11 px-12 text-center border">
              <h1>Sepet Toplamı</h1>
              <div className="flex justify-between mt-5">
                <p>Secimler</p>
                <p>25 Tl</p>
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-white font-bold">Toplam</p>
                <p className="text-white font-bold">110 Tl</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuc;
