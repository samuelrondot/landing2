'use client'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import  Slider  from "@/components/slider"


import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ArrowRightIcon, Mail } from 'lucide-react'
import { siteConfig } from './config/site'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'
import { Locale } from "../../i18n-config";

interface RootLayoutProps {
  children: React.ReactNode
}


export default function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [currentLeadIndex, setCurrentLeadIndex] = useState(0);
  const [leads, setLeads] = useState([
    {
      name: "Elon Musk",
      company: "SpaceX",
      title: "CEO",
      location: "San Francisco, CA",
      avatar: "https://media.wired.com/photos/624f58f64d62eb1d9cf1c357/master/w_2240,c_limit/Elon-Musk-Twitter-Plaintext-Business-1239416791.jpg",
      email: "elon@spacex.com",
      loading: true,
      phone: "+33612345678",
      linkedin: "https://www.linkedin.com/in/",
   
    
    },
    {
      name: "Richard Branson",
      company: "Virgin Group",
      title: "CEO",
      location: "San Francisco, CA",
      avatar: "https://media.licdn.com/dms/image/C4D03AQHh6_Wth5f3rQ/profile-displayphoto-shrink_800_800/0/1625181963183?e=1710374400&v=beta&t=vOPCZxl4teuQUpWIEPZiaLgm8bgEO7G7M7qEi9M8HLg",
      email: "richard@virgin.com",
      loading: true,
      phone: "+33612345678",
      linkedin: "https://www.linkedin.com/in/",
      
    
    },
    {
      name: "Jonathan Anguelov",
      company: "Aircall",
      title: "CEO",
      location: "Paris, France",
      avatar: "https://media.licdn.com/dms/image/D4E03AQGLyospqol4WQ/profile-displayphoto-shrink_800_800/0/1694787427189?e=1710374400&v=beta&t=J7e6KPvnQcwRV-CpRINVyQ3eXKBkPw9h8Zx0oBF9FG8",
      email: "jonathan@aircall.io",
      loading: true,
      phone: "+33612345678",
      linkedin: "https://www.linkedin.com/in/",
      
    
    },
    {
      name: "Satya Nadella",
      company: "Microsoft",
      title: "CEO",
      location: "San Francisco, CA",
      avatar: "https://media.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_800_800/0/1579726625483?e=1710374400&v=beta&t=7f2ItPzivozJqyzew25Xq2Vttr-CN-gB5_fJBvhGlZE",
      email: "satya@microsoft.com",
      loading: true,
      phone: "+33612345678",
      linkedin: "https://www.linkedin.com/in/",
      
    
    },
    {
      name: "Mathilde Collin",
      company: "Front",
      title: "CEO",
      location: "Paris, France",
      avatar: "https://media.licdn.com/dms/image/C4D03AQHMCoW2jrmXrQ/profile-displayphoto-shrink_800_800/0/1517614414560?e=1710374400&v=beta&t=nESWnIneIcY27cM9YN1atBsDDUXR77h4vM5UaDNJViQ",
      email: "mathilde@front.com",
      loading: true,
      phone: "+33612345678",
      linkedin: "https://www.linkedin.com/in/",
      
    
    }

  ])


  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeads((prevLeads) => {
        // Calculate the current index based on time
        const currentIndex = (Date.now() / 2000) % prevLeads.length | 0;

        return prevLeads.map((lead, index) => {
          // Toggle the loading state only if it's currently true
          if (index === currentIndex && lead.loading) {
            return { ...lead, loading: false }; // Or any other update you wish to perform
          }
          return lead;
        });
      });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);



  
  return (
    <div className="container relative sm:w-[90%]" suppressHydrationWarning>
     
{ /*

<div className="![perspective:1000px] sm:![perspective:1000px] md:![perspective:1000px] lg:![perspective:1000px] turbohero-background_container__Vu5AA">
<div className="container-grid-slide">
<div style={{   left:0, right:0}} className="turbohero-background_lines__UYrFE"></div>
</div>
</div>
  */  }
           
          
             <PageHeader className="pb-0 grid_grid__MIUsj">

            {/* <div className="pageHeaderBackground absolute top-0 left-0 right-0 bottom-0 z-0"></div> */}
     
             
            <Link
                href="/docs/changelog"
                className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
              >
                🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
                
                <span className="">
                Reach 1000+ leads per week
                </span>
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            
            <PageHeaderHeading className="mx-6 w-[300px]  md:!w-full font-extrabold text-4xl md:text-6xl  leading-tight xl:leading-snug text-center pb-4 bg-clip-text "><span className="hero-gradient ">10x your Prospection</span>  <br/>
                        without <span className=""></span>scaling your team.
            </PageHeaderHeading>

            <PageHeaderDescription className="font-semibold">
            Supercharge your outreach efforts, extract and enrich leads then start multichannel campaigns through Linkedin and emails.
            </PageHeaderDescription>
            <PageActions>
           
              <Button   className="">
              <Link href="/pricing" >
              14-day free trial 🚀
              </Link>
              </Button>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                
                Talk to sales
              </Link>

           
          

            </PageActions>

        <div className="flex">
        <Image
        src="https://useartemis.co/_next/static/media/LeadIntelligence.cbbb8e0b.png"
        alt="useartemis-linkedin-scraper-2"
        width={100}
        height={100}
        className="rounded-md object-cover mr-4"
      />

          <Image
          src="https://useartemis.co/_next/static/media/LeadIntelligence2.06ec51bd.png"
          alt="useartemis-linkedin-scraper-2"
          width={100}
          height={100}
          className="rounded-md object-cover mr-4"
        />

        </div>
           
          </PageHeader>

        
        


   


  {  /*
<ExamplesNav className="[&>a:first-child]:text-primary " />
      
      <section className="hidden md:block max-w-[900px] m-auto">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <MailPage />
        </div>
      </section>

     
*/ }





      <div className="flex items-center">
      <div className="overflow-hidden  mt-10 sm:p-6 mb-4">
          <Link
          href="/docs/changelog"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          
          <span className="">
          All in one platform
          </span>
          
        </Link>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3 max-w-[800px] capitalize mt-4">
        Email finder + LinkedIn Automation
      </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] ">
        In just a few clicks <span className="hero-gradient font-semibold">scrape Linkedin </span>search results, <span className="hero-gradient font-semibold">find emails</span> of your leads and <span className="hero-gradient font-semibold">automate your prospection</span> through LinkedIn and emails.
        </p>
      </div>

      </div>



      <Slider/>




        
    <div className="mt-20 mb-20"></div>

   


    <div className="text-center w-[500px]  max-w-[90%] m-auto">
  <div className="flex fit-content items-center  w-fit m-auto">

  
  
    <div>
      
    <Avatar className="m-auto">
      <AvatarImage src="https://images.g2crowd.com/uploads/avatar/image/1882833/thumb_square_264d9fe56dedf992467a54a12e9e7e0d.jpeg" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>

    <div className="ml-2">
      <p className="text-lg font-semibold">Kazuki O.</p>
      <p className="text-sm text-muted-foreground">Co-Founder, Markester</p>
    </div>
 
    <div className="flex ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
   
    </div>

  </div>


  <div className="flex">

  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="100" viewBox="0 0 60 60" fill="currentColor" className="mr-4 text-[var(--iconColor,#ff0000)] transition-colors hidden sm:block"><circle cx="30" cy="30" r="30" fill="currentColor"></circle><path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff"></path><polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff"></polygon><path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff"></path></svg>

  <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground text-xl">
  &quot;Best Value for Lead Scrapping tool in the market right now! I love using useArtemis to scrape Linkedin. It saves me tons of time to verify and find email addresses.&quot;
    </blockquote>
  </div>


 
</div>



    




    <div className="flex items-center">
      <div className="overflow-hidden  mt-20 sm:p-10 mb-10">
      <Link
          href="/docs/changelog"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          
          <span className="">
          LinkedIn Scraper
          </span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3 max-w-[800px] capitalize mt-4">
        Scrape leads in seconds
      </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] ">
        The first step of every campaign is to <span className="hero-gradient font-semibold">find the right leads.</span> useArtemis offers several possibilities.
        </p>
      </div>

    </div>


    <Card className="max-w-[900px] m-auto p-4 ">
     <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
            Export LinkedIn & Sales Navigator search results.
        </h4>
          <p className="text-lg text-muted-foreground mt-5">
          Make a search on LinkedIn or LinkedIn Sales Navigator and launch our Chrome extension to export clean data.
         </p>

         <p className="text-md leading-7 mt-5 text-muted-foreground  flex items-center">
         <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#0ACF83"></path></svg> Works with Regular LinkedIn
        </p>

        <p className="text-md leading-7 mt-2 text-muted-foreground flex items-center">
         <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#0ACF83"></path></svg> Works with Sales Navigator
        </p>

        <p className="text-md leading-7 mt-2 text-muted-foreground flex items-center">
         <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#0ACF83"></path></svg> Cloud functions
        </p>

       
             </div>

        <div>
        <Image
        src="https://useartemis.co/_next/static/media/salesnavexport.9a92bdd6.png"
        alt="useartemis-linkedin-scraper-2"
        width={500}
        height={500}
        className="rounded-md object-cover "
      />
          
        </div>
     </div>
    </Card>



    <div className="sm:grid sm:grid-cols-2 gap-4 mt-5 max-w-[900px] m-auto ">

    <Card className="w-full p-4 ">
    
        <div className="p-4">
        <h4 className="scroll-m-20 text-xl text-muted-foreground tracking-tight mb-2">
        <span className="hero-gradient font-semibold">Import & enrich your own leads.</span> Enrich in bulk a CSV file and find emails and phone numbers.
        </h4>
        

       
        </div>

        <div>

        <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/csv-enrichment-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/csv-enrichment-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />


    
     
          
        </div>
 
    </Card>

    <Card className="w-full p-4">
    
        <div className="p-4">
     

        <h4 className="scroll-m-20 text-xl text-muted-foreground tracking-tight mb-2">
        <span className="hero-gradient font-semibold"> Automatic enrichment.</span> Find professional emails and phone numbers of your leads automatically in just a click.
        </h4>
         
       
             </div>

        <div>


        <div className='w-[400px] h-[350px] p-2'>

        { leads.map((x, index) =>  
        
          <div key={index} className='flex items-center border-b p-3'>
          <Avatar >
          <AvatarImage src={x.avatar} alt={x.name}/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='ml-3 items-center'>
          <p className='font-semibold text-sm whitespace-nowrap w-[100px] overflow-hidden'>{x.name}</p>
          <p className='text-sm text-muted-foreground leading-none'>{x.company}</p>
          </div>
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-supported-dps="14x14" fill="currentColor" className="ml-3 rounded" width="15" height="15" focusable="false"><g><path d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"></path></g></svg>
          { x.loading ?
          <Skeleton className="h-4 w-[130px] ml-4" />
            :
          <p className='text-sm text-muted-foreground leading-none ml-3 flex items-center'>{x.email}
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#0ACF83"></path></svg>
          </p>
          }
          </div>
          )}
        </div>

{ /*
        <Image
        src="https://useartemis.co/_next/static/media/enrichment.aa0c3e5e.png"
        alt="useartemis-linkedin-scraper-2"
        width={400}
        height={400}
        className="rounded-md object-cover"
      />
*/     }
        </div>
     
    </Card>

    </div>




   

   

        <div className="overflow-hidden  mt-10 sm:p-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
        Automate your LinkedIn outreach
      </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
        Build your own <span className="hero-gradient font-semibold">sequences</span> with conditions, and use multiple accounts to <span className="hero-gradient font-semibold">automate your prospection</span> through LinkedIn + Emails.
        </p>
        </div>


        <div className="grid sm:grid-cols-2 gap-4 mt-5 max-w-[900px] m-auto">

<Card className="w-full p-4">

    <div className="p-4">
    <h4 className="scroll-m-20 text-xl tracking-tight text-muted-foreground mb-2">
    <span className="hero-gradient font-semibold">Build the perfect sequence.</span> Create the perfect sequence to reach out to your leads on autopilot. Use conditions, LinkedIn actions, emails and more.
    </h4>
    

   
    </div>

    <div>
    <div className="w-fit p-4 ">

<div className="w-fit p-3 flex border border-dashed rounded">
<div>
<p className="flex items-center text-sm font-medium leading-none">
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-supported-dps="14x14" fill="hsl(210 100% 50% / 1)"  width="14" height="14" focusable="false" className='mr-2'>
                        <g>
                          <path className="background-mercado ml-2" d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"></path>
                        </g>
</svg> LinkedIn Invite

</p>
<div className="border mt-2 mb-1" style={{ borderWidth:"1px"}}></div>
<p className="text-sm text-muted-foreground">
Send a LinkedIn Invite</p>      
</div>
<div className="ml-4">
<Avatar className="m-auto">
    <AvatarImage src="https://pbs.twimg.com/profile_images/1735714438206926848/6KIByF4A_400x400.jpg" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>

</div>


<svg style={{ marginLeft:'90px'}} data-size="large" fill="none" height="152" viewBox="0 0 117 152" width="117"><path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint0_linear_1364_100888)" strokeWidth="2"></path><path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint1_linear_1364_100888)" strokeWidth="2"></path><g clip-path="url(#clip0_1364_100888)"><path clip-rule="evenodd" d="M4 0.5L8 7.5H0L4 0.5Z" fill="#45DEC4" fillRule="evenodd"></path></g><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1364_100888" x1="116" x2="4" y1="72" y2="72"><stop stopColor="#E5484D"></stop><stop offset="0.5" stopColor="#FFC634"></stop><stop offset="1" stopColor="#45DEC4"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1364_100888" x1="116" x2="116" y1="152" y2="1.56712e-05"><stop stopColor="var(--ds-background-200)"></stop><stop offset="0.322368" stopColor="var(--ds-background-200)" stopOpacity="0"></stop></linearGradient><clipPath id="clip0_1364_100888"><rect fill="white" height="8" width="8"></rect></clipPath></defs></svg>

<div className="w-fit p-3 flex border rounded" style={{ marginLeft:'150px'}}>
<div>
<p className="flex items-center">
<Mail size={15} className="mr-1" color="#fb0094"/> Email

</p>
<div className="border mt-1 mb-1" style={{ borderWidth:"1px"}}></div>
<p className="text-sm text-muted-foreground">
Send an Email</p>      
</div>
<div>
<div className="ml-4">
<Avatar className="m-auto">
    <AvatarImage src="https://pbs.twimg.com/profile_images/1735714438206926848/6KIByF4A_400x400.jpg" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>
</div>

</div>

</div>

      
    </div>

</Card>

<Card className="w-full p-4">

    <div className="p-4">
 

    <h4 className="scroll-m-20 text-xl text-muted-foreground tracking-tight mb-2">
    <span className="hero-gradient font-semibold"> Hyper personalization with ChatGPT. </span> Let useArtemis and ChatGPT work together to automatically write custom invite notes for each lead.
    </h4>
     
   
         </div>

    <div>
    <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/write-invites-ai.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/write-invites-ai-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      
    </div>
 
</Card>

</div>





<div className="mt-20 mb-20"></div>

<div className="text-center max-w-[90%] w-[500px] m-auto">
  <div className="flex fit-content items-center  w-fit m-auto">
    <div>
    <Avatar className="m-auto">
    <AvatarImage src="https://images.g2crowd.com/uploads/avatar/image/1829349/thumb_square_ace2ae5f10c35a9b4d1d9e071f0c3d02.jpeg" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>

    <div className="ml-2">
      <p className="text-lg font-semibold">Massimo M.</p>
      <p className="text-sm text-muted-foreground">Startup Mentor</p>
    </div>

   
    <div className="flex ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fb0094" stroke="#fb0094" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fb0094" stroke="#fb0094" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fb0094" stroke="#fb0094" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fb0094" stroke="#fb0094" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fb0094" stroke="#fb0094" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
   
    </div>
    

  </div>


  <div className="flex items-center">

  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="100" viewBox="0 0 60 60" fill="#ff0000" className="mr-4 text-[var(--iconColor,#fb0094)] transition-colors hidden sm:block"><circle cx="30" cy="30" r="30" fill="currentColor"></circle><path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff"></path><polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff"></polygon><path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff"></path></svg>

    
    <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground text-xl">
    &quot;As a sales professional, I have struggled in the past with finding accurate B2B contact information for my outreach efforts. But since I started using useArtemis, my search for lead generation has ended.&quot;
      </blockquote>
  </div>

   
</div>



<div className="mt-20 mb-20"></div>

<div className="grid sm:grid-cols-3">



<div className="p-8  grid col-span-2">
  <div className=" w-full">
  <Accordion type="single" collapsible className="w-full">
     
      <AccordionItem value="item-1"  >
        <AccordionTrigger className="text-left">Do I need to keep my browser open while useArtemis is running?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground font-semibold">
        No, you don&apos;t need to keep your browser open. useArtemis is a cloud-based linkedin automation tool, and your data is safe and available anytime, anywhere, from any device.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left">Do I need a LinkedIn Premium subscription?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground font-semibold">
        No, useArtemis also works with regular LinkedIn. However we strongly advise you to pick up a Sales Navigator to improve your performances.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left">Is useArtemis safe for my account?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground font-semibold">
        The safety of your accounts is our biggest priority. 
        <br/>
        <br/>
        We are a cloud-based software and dedicate residential IP address to each of the connected LinkedIn accounts. All of the LinkedIn accounts activities are within the LinkedIn limits, and we&apos;re completely mimicking human activities through our automation.
        <br/>
        <br/>
        👉  We never had any account suspended.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left">Can I try useArtemis for free?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground font-semibold">
        All plans come with a 14-day free trial exept the entreprise plan.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
   
  </div>

  
 
</div>

<div className="  grid sm:grid-cols-2 block2 items-center h-[300px]">

  
  <div className="mt-2 pl-4">
    <h1 className="text-white scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl mb-1">
    Ready to book your first meeting ?
    </h1>
    
    <Button className="mt-10">Start your 14-day free trial now 🚀</Button>
  </div>

  <div className="hidden sm:block">

  <svg width="200" height="200" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clip-rule="evenodd" d="M96.3475 119.848C96.3475 119.848 99.7457 121.595 103.753 124.667C107.138 127.262 119.488 132.337 123.236 133.849C124.469 134.346 123.713 134.486 122.62 134.881C114.464 137.827 78.8357 151.623 56.675 175.194C56.3431 175.547 56.3107 175.356 56.2419 174.95C55.7911 172.279 53.6691 161.379 48.1911 154.852C41.9134 147.372 36.6378 141.963 36.6378 141.963L35.0022 140.126L35.992 142.293C33.3131 143.649 22.8593 148.8 15.5045 150.423C14.2881 150.691 14.3525 150.542 15.5374 149.946C19.8694 147.77 32.005 141.508 34.3007 138.557C34.3007 138.557 47.1225 132.814 50.0611 130.944C52.9994 129.074 70.3624 122.797 96.3475 119.848Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M71.4322 23.9612C89.5605 12.9391 91.0983 34.0188 101.217 36.6498C107.895 38.3859 116.502 46.2761 114.706 56.9511C112.302 71.2425 118.045 70.7082 124.723 80.3245C130.332 88.4009 129.817 101.376 127.609 108.173C126.912 110.321 124.769 111.697 121.088 112.481C106.65 115.557 64.2597 122.983 28.624 113.178C25.3915 112.289 22.6971 111.903 21.0291 108.585C19.0014 104.552 15.9238 96.7506 18.2746 90.0747C21.6135 80.5917 28.0246 78.1877 24.6857 66.4341C21.3465 54.6809 39.3771 53.8792 41.2471 42.5267C43.1171 31.1739 55.5382 13.8109 71.4322 23.9612Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M54.87 40.6568C55.838 39.7532 67.4082 33.7094 84.9215 40.1228C84.9215 40.1228 90.8648 44.7306 90.8648 50.6072C90.8648 56.4842 87.593 63.496 90.6646 67.77C99.1276 79.5447 79.2756 81.0346 89.7295 92.3456C97.8769 101.16 74.4549 115.962 96.6504 116.441C96.6504 116.441 96.0072 120.928 96.4076 125.869C96.4076 125.869 77.9763 149.243 57.6747 171.414C57.6747 171.414 53.935 156.856 48.192 149.51C42.4486 142.164 53.1824 134.847 54.6029 129.876C56.0233 124.905 57.0909 114.553 56.9499 107.769C65.4591 113.415 77.3243 110.967 83.6331 104.472C84.2104 103.878 83.592 104.308 83.3716 104.422C72.3566 110.132 62.8081 110.483 56.4726 103.832C55.0067 102.293 52.065 98.7562 49.1267 89.8077C46.1884 80.8593 46.2416 74.9207 50.0617 68.3043C56.7871 56.6554 46.4272 49.0999 54.87 40.6568Z" fill="white"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M56.6084 88.238C58.5447 87.0359 60.3148 82.6616 62.1512 82.4281C63.9876 82.1942 63.8207 83.5633 64.8893 83.5633C65.9576 83.5633 66.0725 82.2786 67.9444 82.3779C70.1482 82.4947 73.504 87.9039 75.908 88.5718C75.908 88.5718 70.4651 92.2782 65.1228 92.5454C59.7802 92.8125 56.6084 88.238 56.6084 88.238Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M82.5001 56.2004C89.7408 56.3336 92.9179 60.3122 92.9179 65.5496C92.9179 70.7869 87.1362 75.5 81.8989 75.5C76.6618 75.5 73.1506 69.9186 72.6832 64.6145C72.2156 59.3105 75.2594 56.0668 82.5001 56.2004Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M55.5223 56.4366C48.8543 56.1489 46.2653 57.8726 45.5339 62.6821C44.8022 67.4917 48.919 72.7945 53.7286 73.5262C58.5382 74.2576 62.4087 70.057 63.5788 65.2515C64.7492 60.446 62.1901 56.7246 55.5223 56.4366Z" fill="#212121"/>
        <path d="M63.665 63.8732L62.9404 62.7813L63.3738 62.3105C63.3801 62.304 65.0549 59.8452 68.0389 60.069C70.2409 60.2341 72.2544 61.4645 73.5491 63.1219L72.8264 64.2422C71.7463 62.8598 69.9454 61.5754 68.0776 61.4353C66.1714 61.2924 64.8662 62.5677 63.665 63.8732Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M76.0394 56.7053C75.4715 56.5385 74.8198 55.1984 75.2872 54.3969C75.7549 53.5955 82.0322 52.3936 85.1041 52.7274C88.1759 53.0615 91.515 53.7291 93.9859 55.265C96.4569 56.8012 94.6485 57.6752 90.4414 56.0213C86.234 54.367 80.8808 55.0358 76.0394 56.7053Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M60.7705 56.6271C61.3381 56.4602 61.9897 55.1201 61.5224 54.319C61.055 53.5175 54.7774 52.3154 51.7055 52.6491C48.6337 52.9832 45.2946 53.6511 42.8237 55.187C40.353 56.723 42.1614 57.5973 46.3685 55.943C50.5756 54.2891 55.9288 54.9576 60.7705 56.6271Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M62.0976 74.1299C62.4681 73.713 63.0314 73.8101 63.3972 74.0315C64.3391 74.6001 63.4757 77.4515 61.9267 76.7432C61.2815 76.448 61.6004 74.6891 62.0976 74.1299Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M67.1107 74.1304C68.623 73.2424 71.1219 74.704 71.3801 76.0677C71.6136 77.3032 69.51 77.5034 68.9757 77.036C68.4682 76.592 68.4016 75.8239 67.1577 74.4424C67.0135 74.2824 66.9647 74.2161 67.1107 74.1304Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M63.4083 69.5668C63.6798 68.998 63.9152 68.4089 64.1291 67.8164C64.6407 66.4 65.0529 64.9142 65.3898 63.4458C65.4041 63.3842 65.4163 63.3216 65.43 63.2596C65.4586 63.1323 65.4941 62.8978 65.6728 62.9093C65.8528 62.9209 65.8491 63.1435 65.8528 63.2718C65.8818 64.2687 65.6816 65.3722 65.4116 66.3287C65.0647 67.5576 64.5361 68.7694 63.8249 69.8321C63.7125 69.9999 63.5973 70.1721 63.4743 70.3325C63.4005 70.4293 63.2881 70.584 63.1443 70.4947C62.9609 70.381 63.1732 70.0398 63.2364 69.9109C63.2925 69.796 63.3532 69.6823 63.4083 69.5668Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M60.7497 73.5357C60.4629 74.6476 60.3384 76.2832 61.2401 77.169C61.256 77.1845 61.2718 77.1998 61.2868 77.2163C61.3497 77.2845 61.3976 77.3729 61.3382 77.4654C61.2544 77.5955 61.1093 77.5295 61.0072 77.4754C60.5212 77.2163 60.1734 76.6216 60.0277 76.1082C59.7674 75.1909 59.9872 74.2269 60.4103 73.395C60.419 73.3779 60.4271 73.3607 60.4355 73.3439C60.4458 73.3234 60.4561 73.3031 60.4676 73.2835C60.5093 73.2132 60.5834 73.1646 60.6703 73.192C60.835 73.2443 60.779 73.4221 60.7497 73.5357Z" fill="#212121"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M72.3687 72.463C72.3126 72.3429 72.1716 72.1165 72.3257 72.0122C72.4708 71.9141 72.6019 72.0872 72.6856 72.1794C73.7527 73.3541 74.3452 75.9269 73.6785 77.4003C73.2831 78.2746 72.2939 78.4496 71.4336 78.3783C71.2932 78.3664 70.9258 78.3745 70.9342 78.1575C70.942 77.9579 71.2471 77.9732 71.3813 77.9582C72.6305 77.8197 73.2675 76.9712 73.2573 75.7504C73.2486 74.6768 72.8176 73.4276 72.3687 72.463Z" fill="#212121"/>
  </svg>
 
  </div>
 
</div>



</div>
     
    </div>
  )
}

