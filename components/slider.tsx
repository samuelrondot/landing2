"use client"
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useEffect, useState } from "react";
import { BarChart2, GitFork, Linkedin, Mail, Sparkle, Sparkles } from "lucide-react"

export default function Slider() {

    const [activeTab, setActiveTab] = useState(0);
    const [isstopped, setIsstopped] = useState(false);
    // Automatically switch tabs every 2 seconds

 
    useEffect(() => {
    
       if(!isstopped) {
        const interval = setInterval(() => {
          setActiveTab(prevActiveTab => (prevActiveTab + 1) % 4); // Assuming 4 tabs
        }, 4000);
    
        return () => clearInterval(interval);
       }

       
      
        
     
    }, [isstopped]);
   

    // Function to render the progress bar
  const renderProgressBar = (tabIndex: number) => {
    if(isstopped) return;
    return activeTab === tabIndex ? <div className="progressBar"></div> : null;
  };
  
  return (
   
<div>

      <Card className="max-w-[1000px] m-auto ">


      <CardHeader >
        <div className="flex justify-between">

        <div onClick={()=>{
            setIsstopped(true)
            setActiveTab(0)
                }
             } className={`cursor-pointer p-2 w-full sm:max-w-[25%] text-muted-foreground ${activeTab !== 0 && 'hidden sm:block'}`}style={{ borderRight:'0.5px solid '}}>
        <div className={activeTab === 0 ? "text-foreground" : "text-muted-foreground"}>
            <div className="flex items-center">
            
            <Linkedin size={24} />
           
            <h4 className="scroll-m-20 text-sm font-semibold tracking-tight leading-5 ml-4">
            Scrape leads from LinkedIn.
            </h4>
            </div>
        {renderProgressBar(0)}
        </div>
       
        
        </div>

        <div onClick={()=>
        {
          setIsstopped(true)
          setActiveTab(1)
              }} className={`cursor-pointer p-2 w-full sm:max-w-[25%] text-muted-foreground ${activeTab !== 1 && 'hidden sm:block'}`} style={{ borderRight:'0.5px solid'}}>
        <CardTitle className={activeTab === 1 ? "text-foreground" : "text-muted-foreground"}>
        <div className="flex items-center">
        <Sparkles size={24} />
        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight leading-5 ml-4">
        Automatically find emails.
        </h4>
        </div>
        </CardTitle>
        {renderProgressBar(1)}
      
        </div>

        <div onClick={()=>
        {
          setIsstopped(true)
          setActiveTab(2)
              }
              } className={`cursor-pointer p-2 w-full sm:max-w-[25%] text-muted-foreground ${activeTab !== 2 && 'hidden sm:block'}`} style={{ borderRight:'0.5px solid'}}>
        <CardTitle className={activeTab === 2 ? "text-foreground" : "text-muted-foreground"}>
        <div className="flex items-center">
        <GitFork size={24} />
        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight leading-5 ml-4">
        Automate your prospection.
        </h4>
        </div>
        </CardTitle>
        {renderProgressBar(2)}
       
        </div>
        
        <div  onClick={()=>
        {
          setIsstopped(true)
          setActiveTab(3)
              }
              } className={`cursor-pointer p-2 w-full sm:max-w-[25%] text-muted-foreground ${activeTab !== 3 && 'hidden sm:block'}`}>
        <CardTitle className={activeTab === 3 ? "text-foreground" : "text-muted-foreground"}>
        <div className="flex items-center">
        <BarChart2 size={24} />
        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight leading-5 ml-4">
        Track results from your campaigns.
        </h4>
        </div>
        </CardTitle>
        {renderProgressBar(3)}
      
        </div>

        </div>
      </CardHeader>

      
      <CardContent>
      {
        activeTab === 0 ?
        <div className="">
        <Image
          src="https://useartemis.co/assets/useartemis-linkedin-scraper-2.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/Capture+d%E2%80%99e%CC%81cran+2024-01-10+a%CC%80+11.20.56.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>

        :
        activeTab === 1 ?
        <div className="">
       <Image
          src="https://useartemis.co/assets/useartemis-linkedin-scraper-2.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/Capture+d%E2%80%99e%CC%81cran+2024-01-10+a%CC%80+11.20.56.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>

      :
      activeTab === 2 ?
      <div className="">
      
      <Image
        src="https://useartemis.s3.us-west-2.amazonaws.com/campaignlight-min.png"
        width={1280}
        height={998}
        alt="Playground"
        className="block dark:hidden"
      />
      <Image
        src="https://useartemis.s3.us-west-2.amazonaws.com/campaigndark-min.png"
        width={1280}
        height={998}
        alt="Playground"
        className="hidden dark:block"
      />
   
    
  </div>
      :
        activeTab === 3 ?
        <div className="">
        <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/stats.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="https://useartemis.s3.us-west-2.amazonaws.com/stats-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
        : null
      }

        
      </CardContent>


      
      
    </Card>
        


    </div>

  )
}
