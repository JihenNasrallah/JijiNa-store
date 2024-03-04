export default function Services() {
    return (
        <div className="pt-40 w-screen h-40 justify-center items-center gap-20 inline-flex">
          {/* 1 */}
          <div className="group">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
                <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-red-500" />
             //////////////////////////////////////////// icon 
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <p className="text-black text-xl font-semibold leading-7">
                  FREE AND FAST DELIVERY
                </p>
                <p className="text-center text-black text-sm font-normal leading-tight">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="group">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
                <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-red-500" />
               //////////////////// icon 
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <p className="text-black text-xl font-semibold leading-7">
                  24/7 CUSTOMER SERVICE
                </p>
                <p className="text-center text-black text-sm font-normal leading-tight">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="group">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
                <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-red-500" />
               ////////////////////////// icon 
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <p className="text-black text-xl font-semibold leading-7">
                  FREE AND FAST DELIVERY
                </p>
                <p className="text-center text-black text-sm font-normal leading-tight">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}