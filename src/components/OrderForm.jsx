import React from "react";

function OrderForm() {
  return (
    <div className="flex justify-center mt-12">
      <form action="" className="w-[590px]">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="font-bold text-xl">
              Boyut Seç <span className="text-[#CE2829]">*</span>
            </h1>
            <div className="mt-5 flex gap-5">
              <button className="w-[56px] h-[56px] border rounded-full bg-[#FAF7F2]">
                S
              </button>
              <button className="w-[56px] h-[56px] border rounded-full bg-[#FAF7F2]">
                M
              </button>
              <button className="w-[56px] h-[56px] border rounded-full bg-[background: #FFEECC]">
                L
              </button>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-2">
              Hamur Seç <span className="text-[#CE2829]">*</span>
            </h1>
            <div className="text-left">
              <select className="border rounded-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CE2829]">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="thin">İnce Hamur</option>
                <option value="thick">Kalın Hamur</option>
                <option value="stuffed">Dolgu Hamur</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mt-12">
            Ek Malzemeler <span className="text-[#CE2829]">*</span>
          </h1>
          <div></div>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
