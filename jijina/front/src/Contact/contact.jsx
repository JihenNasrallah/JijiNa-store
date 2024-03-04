export default function Contact() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
  
        <div className="inline-flex gap-5">
          {/* LEFT-PANEL */}
          <div className="w-80 h-[460px] pt-14 pl-8 bg-white rounded shadow flex-col justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-10 h-10 p-2.5 bg-red-500 rounded-3xl justify-center items-center flex">
                ////////icon phone
                  </div>
                  <div className="text-black text-base font-medium leading-normal">
                    Call us
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-64 text-black text-sm font-normal leading-tight">
                    We are available 24/7, 7 days a week.
                  </div>
                  <div className="text-black text-sm font-normal leading-tight">
                    Phone: +216 50 50 50 50
                  </div>
                </div>
              </div>
              <div className="w-64 h-px opacity-50 justify-center items-center inline-flex">
                <div className="w-64 h-px border border-black"></div>
              </div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-10 h-10 px-2.5 py-3 bg-red-500 rounded-3xl justify-center items-center flex">
                 ////////////////icon mail
                  </div>
                  <div className="text-black text-base font-medium leading-normal">
                    Write us
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-64 text-black text-sm font-normal leading-tight">
                    Fill out our form and we will contact you within 24 hours.
                  </div>
                  <div className="text-black text-sm font-normal leading-tight">
                    Emails: customer@exclusive.com
                  </div>
                  <div className="text-black text-sm font-normal leading-tight">
                    Emails: support@exclusive.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LEFT-PANEL */}

          
          {/* RIGHT-PANEL */}
          <div className="w-[800px] h-[460px] px-8 py-10 bg-white rounded shadow justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-end gap-8 inline-flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <input
                  placeholder="Your name *"
                  className="w-60 h-12 pl-4 left-0 top-0 relative bg-neutral-100 rounded"
                />
  
                <input
                  placeholder="Your Email *"
                  className="w-60 h-12 pl-4 left-0 top-0 relative bg-neutral-100 rounded"
                />
  
                <input
                  placeholder="Your Phone *"
                  className="w-60 h-12 pl-4 left-0 top-0 relative bg-neutral-100 rounded"
                />
              </div>
              <textarea
                placeholder="Your Message *"
                className="w-[750px] h-52 pl-4 pt-4 left-0 top-0 relative bg-neutral-100 rounded"
              />
              <button className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex text-neutral-50 text-base font-medium leading-normal">
                Send Massage
              </button>
            </div>
          </div>
          {/* RIGHT-PANEL */}
        </div>
  
      </main>
    );
  }