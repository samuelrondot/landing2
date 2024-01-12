
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="p-6 md:px-8 md:py-0 border-t mt-10">
     
          <Link href="/" className=" flex items-center  mt-10">
            <svg width="50" height="50" viewBox="0 0 145 176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M96.3475 119.848C96.3475 119.848 99.7457 121.595 103.753 124.667C107.138 127.262 119.488 132.337 123.236 133.849C124.469 134.346 123.713 134.486 122.62 134.881C114.464 137.827 78.8357 151.623 56.675 175.194C56.3431 175.547 56.3107 175.356 56.2419 174.95C55.7911 172.279 53.6691 161.379 48.1911 154.852C41.9134 147.372 36.6378 141.963 36.6378 141.963L35.0022 140.126L35.992 142.293C33.3131 143.649 22.8593 148.8 15.5045 150.423C14.2881 150.691 14.3525 150.542 15.5374 149.946C19.8694 147.77 32.005 141.508 34.3007 138.557C34.3007 138.557 47.1225 132.814 50.0611 130.944C52.9994 129.074 70.3624 122.797 96.3475 119.848Z" fill="#212121"/>
            <path d="M28.2261 114.624C27.9143 114.538 27.5974 114.456 27.2775 114.373C24.5031 113.653 21.5066 112.875 19.6889 109.259C18.6427 107.178 17.3106 104.098 16.5454 100.646C15.7825 97.2036 15.5574 93.275 16.8597 89.5765C17.7391 87.079 18.8179 85.0584 19.8594 83.2762C20.1803 82.7271 20.49 82.2125 20.7871 81.7188C21.4775 80.5717 22.1001 79.5371 22.6386 78.4433C23.3823 76.9327 23.9054 75.414 24.0682 73.6175C24.2318 71.8132 24.0391 69.6471 23.2428 66.8441C22.2899 63.4902 22.8568 60.7861 24.3475 58.5138C25.7696 56.3462 27.9896 54.6463 30.1411 53.1096C30.5267 52.8341 30.911 52.5632 31.2922 52.2946C33.1165 51.0088 34.8688 49.7738 36.3533 48.3252C38.1087 46.6121 39.3677 44.7073 39.7671 42.2829C40.7543 36.2895 44.4886 28.7771 50.1137 24.0336C52.9473 21.6441 56.3185 19.9101 60.1092 19.4925C63.6803 19.099 67.5021 19.8878 71.4469 22.2106C75.7978 19.7174 79.412 18.9287 82.5536 19.4436C85.881 19.989 88.3715 21.9486 90.4279 24.1655C91.457 25.275 92.4091 26.4843 93.3135 27.6562C93.4577 27.843 93.6004 28.0285 93.742 28.2126C94.502 29.2006 95.2311 30.1485 95.9857 31.035C97.7882 33.1529 99.5289 34.6611 101.594 35.198C105.271 36.1541 109.368 38.7572 112.32 42.523C115.295 46.3189 117.165 51.3767 116.185 57.1999C115.019 64.1357 115.879 67.1264 117.543 69.539C118.334 70.6845 119.324 71.729 120.555 73.0272C120.73 73.2113 120.909 73.4004 121.093 73.5956C122.551 75.1399 124.222 76.9732 125.955 79.4689C128.974 83.8157 130.289 89.3828 130.595 94.6416C130.901 99.9086 130.204 105.04 129.036 108.636C128.079 111.584 125.216 113.135 121.4 113.948C106.94 117.029 64.2384 124.533 28.2261 114.624ZM28.2261 114.624L28.624 113.178L28.2261 114.624Z" fill="#212121" stroke="white" stroke-width="3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.87 40.6568C55.838 39.7532 67.4082 33.7094 84.9215 40.1228C84.9215 40.1228 90.8648 44.7306 90.8648 50.6072C90.8648 56.4842 87.593 63.496 90.6646 67.77C99.1276 79.5447 79.2756 81.0346 89.7295 92.3456C97.8769 101.16 74.4549 115.962 96.6504 116.441C96.6504 116.441 96.0072 120.928 96.4076 125.869C96.4076 125.869 77.9763 149.243 57.6747 171.414C57.6747 171.414 53.935 156.856 48.192 149.51C42.4486 142.164 53.1824 134.847 54.6029 129.876C56.0233 124.905 57.0909 114.553 56.9499 107.769C65.4591 113.415 77.3243 110.967 83.6331 104.472C84.2104 103.878 83.592 104.308 83.3716 104.422C72.3566 110.132 62.8081 110.483 56.4726 103.832C55.0067 102.293 52.065 98.7562 49.1267 89.8077C46.1884 80.8593 46.2416 74.9207 50.0617 68.3043C56.7871 56.6554 46.4272 49.0999 54.87 40.6568Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6084 88.238C58.5447 87.0359 60.3148 82.6616 62.1512 82.4281C63.9876 82.1942 63.8207 83.5633 64.8893 83.5633C65.9576 83.5633 66.0725 82.2786 67.9444 82.3779C70.1482 82.4947 73.504 87.9039 75.908 88.5718C75.908 88.5718 70.4651 92.2782 65.1228 92.5454C59.7802 92.8125 56.6084 88.238 56.6084 88.238Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M82.5001 56.2004C89.7408 56.3336 92.9179 60.3122 92.9179 65.5496C92.9179 70.7869 87.1362 75.5 81.8989 75.5C76.6618 75.5 73.1506 69.9186 72.6832 64.6145C72.2156 59.3105 75.2594 56.0668 82.5001 56.2004Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.5223 56.4366C48.8543 56.1489 46.2653 57.8726 45.5339 62.6821C44.8022 67.4917 48.919 72.7945 53.7286 73.5262C58.5382 74.2576 62.4087 70.057 63.5788 65.2515C64.7492 60.446 62.1901 56.7246 55.5223 56.4366Z" fill="#212121"/>
            <path d="M63.665 63.8732L62.9404 62.7813L63.3738 62.3105C63.3801 62.304 65.0549 59.8452 68.0389 60.069C70.2409 60.2341 72.2544 61.4645 73.5491 63.1219L72.8264 64.2422C71.7463 62.8598 69.9454 61.5754 68.0776 61.4353C66.1714 61.2924 64.8662 62.5677 63.665 63.8732Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.0394 56.7053C75.4715 56.5385 74.8198 55.1984 75.2872 54.3969C75.7549 53.5955 82.0322 52.3936 85.1041 52.7274C88.1759 53.0615 91.515 53.7291 93.9859 55.265C96.4569 56.8012 94.6485 57.6752 90.4414 56.0213C86.234 54.367 80.8808 55.0358 76.0394 56.7053Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7705 56.6271C61.3381 56.4602 61.9897 55.1201 61.5224 54.319C61.055 53.5175 54.7774 52.3154 51.7055 52.6491C48.6337 52.9832 45.2946 53.6511 42.8237 55.187C40.353 56.723 42.1614 57.5973 46.3685 55.943C50.5756 54.2891 55.9288 54.9576 60.7705 56.6271Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0976 74.1299C62.4681 73.713 63.0314 73.8101 63.3972 74.0315C64.3391 74.6001 63.4757 77.4515 61.9267 76.7432C61.2815 76.448 61.6004 74.6891 62.0976 74.1299Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1107 74.1304C68.623 73.2424 71.1219 74.704 71.3801 76.0677C71.6136 77.3032 69.51 77.5034 68.9757 77.036C68.4682 76.592 68.4016 75.8239 67.1577 74.4424C67.0135 74.2824 66.9647 74.2161 67.1107 74.1304Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4083 69.5668C63.6798 68.998 63.9152 68.4089 64.1291 67.8164C64.6407 66.4 65.0529 64.9142 65.3898 63.4458C65.4041 63.3842 65.4163 63.3216 65.43 63.2596C65.4586 63.1323 65.4941 62.8978 65.6728 62.9093C65.8528 62.9209 65.8491 63.1435 65.8528 63.2718C65.8818 64.2687 65.6816 65.3722 65.4116 66.3287C65.0647 67.5576 64.5361 68.7694 63.8249 69.8321C63.7125 69.9999 63.5973 70.1721 63.4743 70.3325C63.4005 70.4293 63.2881 70.584 63.1443 70.4947C62.9609 70.381 63.1732 70.0398 63.2364 69.9109C63.2925 69.796 63.3532 69.6823 63.4083 69.5668Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7497 73.5357C60.4629 74.6476 60.3384 76.2832 61.2401 77.169C61.256 77.1845 61.2718 77.1998 61.2868 77.2163C61.3497 77.2845 61.3976 77.3729 61.3382 77.4654C61.2544 77.5955 61.1093 77.5295 61.0072 77.4754C60.5212 77.2163 60.1734 76.6216 60.0277 76.1082C59.7674 75.1909 59.9872 74.2269 60.4103 73.395C60.419 73.3779 60.4271 73.3607 60.4355 73.3439C60.4458 73.3234 60.4561 73.3031 60.4676 73.2835C60.5093 73.2132 60.5834 73.1646 60.6703 73.192C60.835 73.2443 60.779 73.4221 60.7497 73.5357Z" fill="#212121"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3687 72.463C72.3126 72.3429 72.1716 72.1165 72.3257 72.0122C72.4708 71.9141 72.6019 72.0872 72.6856 72.1794C73.7527 73.3541 74.3452 75.9269 73.6785 77.4003C73.2831 78.2746 72.2939 78.4496 71.4336 78.3783C71.2932 78.3664 70.9258 78.3745 70.9342 78.1575C70.942 77.9579 71.2471 77.9732 71.3813 77.9582C72.6305 77.8197 73.2675 76.9712 73.2573 75.7504C73.2486 74.6768 72.8176 73.4276 72.3687 72.463Z" fill="#212121"/>
            </svg>
            <span className="font-bold  text-2xl">
              useArtemis
            </span>
          </Link>
      <div className="sm:grid-cols-4 grid p-4 mt-4 ">
          <div className="">
          
          <h3 className="text-foreground font-semibold text-lg mb-2">Product</h3>
          <ul className="text-muted-foreground">
            <li className="hover:text-foreground font-semibold text-balance  text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/linkedin-scraper">LinkedIn Scraper</a>
            </li>
            <li className="hover:text-foreground font-semibold text-balance  text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/email-finder">Email Finder</a>
            </li>
            <li className="hover:text-foreground font-semibold text-balance  text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/multichannel-outreach">Prospecting automation</a>
            </li>

            <li className="hover:text-foreground font-semibold text-balance  text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/multichannel-outreach">Linkedin automation</a>
            </li>


            <li className="hover:text-foreground font-semibold text-balance text-sm leading-loose text-muted-foreground text-left">
              <a target="_blank" href="https://chromewebstore.google.com/detail/useartemis-email-finder-e/eblaafalmnibhddbmepjjdoohmhnfncf?pli=1"  className="flex items-center">Chrome extension <ArrowUpRight size={13}/></a>
            </li>
          </ul>
          </div>


          <div className="">
          <h3 className="text-foreground font-semibold text-lg mb-2">Company</h3>
          <ul className="text-muted-foreground">
            <li className="hover:text-foreground font-semibold text-balance  text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/blog">Blog</a>
            </li>
            <li className="hover:text-foreground font-semibold text-balance  text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="hover:text-foreground font-semibold text-balance text-sm leading-loose text-muted-foreground md:text-left">
              <a target="_blank" href="https://help.useartemis.co/en/?_gl=1*3yunov*_ga*ODkzNDc4Nzg3LjE2ODE0ODY1MzI.*_ga_K29KX46KCP*MTcwNDg5Njk4MS40OC4xLjE3MDQ4OTg5NTUuMC4wLjA.">Help center</a>
            </li>

            <li className="hover:text-foreground font-semibold text-balance  text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/privacy">Privacy</a>
            </li>

            <li className="hover:text-foreground font-semibold text-balance text-sm leading-loose text-muted-foreground md:text-left">
              <a href="/terms">Terms</a>
            </li>
           
          </ul>
          </div>


          <div className="">
          <h3 className="text-foreground font-semibold text-lg mb-2">Ressources</h3>
          <ul className="text-muted-foreground">
          <li className="hover:text-foreground font-semibold text-balance text-sm leading-loose text-muted-foreground md:text-left">
              <a target="_blank" href="https://www.youtube.com/@useartemis">Youtube Chanel</a>
            </li>
            <li className="hover:text-foreground font-semibold text-balance text-sm leading-loose text-muted-foreground md:text-left">
              <a target="_blank" href="https://useartemis.firstpromoter.com/">Affiliate program</a>
            </li>
            <li className="hover:text-foreground font-semibold text-balance text-sm leading-loose text-muted-foreground md:text-left">
              <a target="_blank" href="https://www.g2.com/products/useartemis/reviews#reviews">Reviews</a>
            </li>
           
            
          </ul>
          </div>

          <div className="">
          <h3 className="text-foreground font-semibold text-lg mb-2">Ready to get started?</h3>
          <div>
            <div>
            <Button className="w-full">Start for free</Button>
            </div>
            
            <div className="mt-4">
            <Button className="w-full" variant={'outline'}>Talk to sales</Button>
            </div>
            
            
          </div>
            
          </div>
      </div>


      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={"https://twitter.com/samuelrdt"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Samuel Rondot
          </a>
          . © 2024 useArtemis. All rights reserved.
          .
        </p>
        <div className="flex items-center">
          <a target="_blank" href="https://twitter.com/useartemisco" className="mr-2 text-balance text-center text-sm leading-loose text-muted-foreground md:text-left flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height={15} width={15} focusable="false" data-prefix="fab" data-icon="twitter" role="img"><path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0" fill="currentColor"></path></svg></a>
          <a target="_blank"  href="https://www.linkedin.com/company/86274280" className="ml-2 text-balance text-center text-sm leading-loose text-muted-foreground md:text-left"><Linkedin size={20}/></a>
        </div>
        
      </div>

     
    </footer>
  )
}
