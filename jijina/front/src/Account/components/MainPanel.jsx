import Link from "next/link"; // badli link mta3 react
import PictureUpload from "./PictureUpload";

export default function MainPanel() {
  return (
    <main>
      <div className="w-[870px] h-[630px] relative bg-white rounded shadow">
        <div className="left-[80px] top-[40px] absolute text-red-500 text-xl font-medium leading-7">
          Edit Your Profile
        </div>
        <PictureUpload />
        <div className="left-[80px] top-[84px] absolute justify-start items-start gap-12 inline-flex">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-black text-base font-normal leading-normal">
              First Name
            </p>
            <input
              placeholder="Malek"
              className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            />
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-black text-base font-normal leading-normal">
              Last Name
            </p>
            <input
              placeholder="Hadrich"
              className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            />
          </div>
        </div>
        <div className="left-[80px] top-[190px] absolute justify-start items-start gap-12 inline-flex">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-black text-base font-normal leading-normal">
              Email
            </p>
            <input
              placeholder="mhadrich@gmail.com"
              type="email"
              className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            />
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-black text-base font-normal leading-normal">
              Address
            </p>
            <input
              placeholder="34 Chem's Street"
              className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            />
          </div>
        </div>
        <div className="left-[80px] top-[296px] absolute flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-black text-base font-normal leading-normal">
              Password Changes
            </p>
            <input
              placeholder="Current Password"
              type="password"
              className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
            />
          </div>
          <input
            placeholder="New Password"
            type="password"
            className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
          />
        </div>
        <div className="left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
          <Link
            href="/"
            className="text-black text-base font-normal leading-normal"
          >
            Cancel
          </Link>
          <button className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex text-neutral-50 text-base font-medium leading-normal hover:bg-red-600">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
}