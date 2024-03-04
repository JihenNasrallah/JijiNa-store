import Link from '@mui/material/Link';


export default function Team() {
  return (
    <main>
      <div className="w-screen p-24 h-96 justify-start items-start gap-5 inline-flex">
        {/* jihen */}
        <div className="w-96 h-96 flex-col justify-start items-start gap-2 inline-flexq">
          <img src="photo" />
          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-black text-3xl font-medium leading-loose tracking-wider">
            Jihen Nasrallah
            </p>
            <p className="text-black text-base font-normal leading-normal">
              CEO ("Chief Executive Officer")
            </p>
            <div className="justify-start items-start gap-3 inline-flex">
              <Link href="https://www.facebook.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_facebook-1024.png"
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Instagram-1024.png"
                />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_LinkedIn-1024.png"
                />
              </Link>
            </div>
          </div>
        </div>
      
      </div>
    </main>
  );
}