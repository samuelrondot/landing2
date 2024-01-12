'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import Autoplay from "embla-carousel-autoplay"

import { CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ArrowRight, ArrowRightIcon, Mail } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React from 'react'

import { Locale } from "../../../i18n-config";

interface RootLayoutProps {
  children: React.ReactNode
}


export default function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {

  const [currentLeadIndex, setCurrentLeadIndex] = useState(0);

  
  return (
    <div className="container relative sm:w-[90%]">
     
           <PageHeader className="pb-0">
            
            <PageHeaderHeading className="mx-6 max-w-[700px]   font-extrabold text-4xl md:text-6xl  leading-tight xl:leading-snug text-center pb-4 bg-clip-text ">
            Find a plan to scale your prospection
            </PageHeaderHeading>

            <PageHeaderDescription className="font-semibold">
            <span className='hero-gradient'>5x your revenues</span>, cancel at any time.
            </PageHeaderDescription>

           {/* <div className="flex items-center space-x-2 mt-5">
              <Label className='text-lg font-semibold'>Monthly billing</Label>
              <Switch />
              <Label className='text-lg font-semibold'>Annual billing</Label>
            </div>
          */}
         </PageHeader>

        
      
         
          
        <div className='sm:grid sm:grid-cols-3 gap-4 '>
          <Card className="border p-4 rounded  mt-2">
            <p className="text-xl mb-2 font-semibold ">Starter</p>
            <h3 className="scroll-m-20 mb-1 text-4xl font-bold tracking-tight">
             $99
            </h3>
            <p className='text-muted-foreground text-xs'>billed monthly</p>
            <Separator className="my-4" />
            <p className="text-sm font-semibold flex items-center">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            2k enrichment credits
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            Multiple senders
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            Send unlimited emails
            </p>

            <p className="text-sm font-semibold flex items-center mt-3 ">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            LinkedIn automation
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            4 running campaign
            </p>

            <p className="text-sm font-semibold flex items-center mt-3 hero-gradient">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            AI campaign and icebreakers
            </p>


            <Button  className='w-full mt-10 justify-between rounded'>
              Start for free

              <ArrowRightIcon size={14}/>
              </Button>
          
          </Card>


          <Card className="border p-4 rounded mt-2 ">
            <p className="text-xl mb-2 font-semibold ">Pro</p>
            <h3 className="scroll-m-20 mb-1 text-4xl font-bold tracking-tight">
             $129
            </h3>
            <p className='text-muted-foreground text-xs'>billed monthly</p>
            <Separator className="my-4" />
            <p className="text-sm font-semibold flex items-center">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            7k enrichment credits
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            Multiple senders
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            Send unlimited emails
            </p>

            <p className="text-sm font-semibold flex items-center mt-3 ">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            LinkedIn automation
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            6 running campaign
            </p>

            <p className="text-sm font-semibold flex items-center mt-3 hero-gradient">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            AI campaign and icebreakers
            </p>


            <Button  className='w-full mt-10 justify-between rounded'>
              Start for free

              <ArrowRightIcon size={14}/>
              </Button>
          
          </Card>



          <Card className="border p-4 rounded  mt-2 relative blockk">
            <p className="text-xl mb-2 font-semibold ">Unlimited</p>
            <h3 className="scroll-m-20 mb-1 text-4xl font-bold tracking-tight">
             $199
            </h3>

            <p className=' pl-3 pr-3 pt-2 pb-2 absolute right-[10px] top-[10px] font-semibold text-xs uppercase border-gradient'>Most popular</p>

            <p className='text-muted-foreground text-xs'>billed monthly</p>
            <Separator className="my-4" />
            <p className="text-sm font-semibold flex items-center">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            <span className='hero-gradient mr-1'>Unlimited</span> enrichment credits
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            Multiple senders
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            Send unlimited emails
            </p>

            <p className="text-sm font-semibold flex items-center mt-3 ">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            LinkedIn automation
            </p>

            <p className="text-sm font-semibold flex items-center mt-3">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            <span className='hero-gradient mr-1'>Unlimited</span> running campaign
            </p>

            <p className="text-sm font-semibold flex items-center mt-3 hero-gradient">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"></path></svg> 
            AI campaign and icebreakers
            </p>


            <Button variant={'outline'} className='w-full mt-10 justify-between rounded '>
              Get Started

              <ArrowRightIcon size={14}/>
              </Button>
          
          </Card>





          

        </div>
      




        
    <div style={{ marginTop:'200px'}} className="mt-20 mb-20"></div>
  
    <Carousel
      opts={{
        align: "start",
       
        
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full mt-20"
    >
      <CarouselContent>
       
          <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
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
                  </div>

                  <div style={{ marginTop:'10px'}} className="flex items-center w-fit m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="currentColor"  className="mr-2 text-[var(--iconColor,#ff0000)] transition-colors hidden sm:block"><circle cx="30" cy="30" r="30" fill="currentColor"></circle><path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff"></path><polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff"></polygon><path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff"></path></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  
                    </div>


                   <div >
                  <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground text-xl">
                  &quot;Best Value for Lead Scrapping tool in the market right now! I love using useArtemis to scrape Linkedin. It saves me tons of time to verify and find email addresses.&quot;
                  </blockquote>

                 
                  </div>

                  
              </div>

          </CarouselItem>

          <CarouselItem key={2} className="md:basis-1/2 lg:basis-1/3">
              <div className="text-center w-[500px]  max-w-[90%] m-auto">
                
                  <div className="flex fit-content items-center  w-fit m-auto">

                     <div>
                    <Avatar className="m-auto">
                      <AvatarImage src="https://images.g2crowd.com/uploads/avatar/image/1783350/thumb_square_2e69ad475d5b60612006af1d4b93ff6e.jpeg" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </div>

                    <div className="ml-2">
                      <p className="text-lg font-semibold">Jefferson T.</p>
                      <p className="text-sm text-muted-foreground">Acquisitions & Development</p>
                    </div>
                  </div>

                  <div style={{ marginTop:'10px'}} className="flex items-center w-fit m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="currentColor"  className="mr-2 text-[var(--iconColor,#ff0000)] transition-colors hidden sm:block"><circle cx="30" cy="30" r="30" fill="currentColor"></circle><path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff"></path><polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff"></polygon><path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff"></path></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  
                    </div>


                   <div >
                  <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground text-xl">
                  &quot;Fantastic Lead Generation Tool That Is Continually Improving. Highly Recommend! What I like best about Artemis is its ease of use. The UX is intuitive and is continually improving. Knowing the development team continues to improve the product is a great comfort.&quot;
                  </blockquote>

                 
                  </div>

                  
              </div>

          </CarouselItem>


          <CarouselItem key={3} className="md:basis-1/2 lg:basis-1/3">
              <div className="text-center w-[500px]  max-w-[90%] m-auto">
                
                  <div className="flex fit-content items-center  w-fit m-auto">

                     <div>
                    <Avatar className="m-auto">
                      <AvatarImage src="https://images.g2crowd.com/uploads/avatar/image/1795823/thumb_square_64a59830094c3a2b2e02b07ac8f60412.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </div>

                    <div className="ml-2">
                      <p className="text-lg font-semibold">Shakil A.</p>
                      <p className="text-sm text-muted-foreground">Associate</p>
                    </div>
                  </div>

                  <div style={{ marginTop:'10px'}} className="flex items-center w-fit m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="currentColor"  className="mr-2 text-[var(--iconColor,#ff0000)] transition-colors hidden sm:block"><circle cx="30" cy="30" r="30" fill="currentColor"></circle><path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff"></path><polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff"></polygon><path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff"></path></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  
                    </div>


                   <div >
                  <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground text-xl">
                  &quot;I like best the three things of useArtemis such as-

1. Huge database.

2. Easy to use.

3. Bulk enrichment.

Artemis has made work easy to find quality leads from a single platform. It is straightforward to use and saves me lots of time. It is a great lead-generation tool that is helping my business a lot.&quot;
                  </blockquote>

                 
                  </div>

                  
              </div>

          </CarouselItem>



          <CarouselItem key={4} className="md:basis-1/2 lg:basis-1/3">
              <div className="text-center w-[500px]  max-w-[90%] m-auto">
                
                  <div className="flex fit-content items-center  w-fit m-auto">

                     <div>
                    <Avatar className="m-auto">
                      <AvatarImage src="https://images.g2crowd.com/uploads/avatar/image/587067/thumb_square_da626e9f8e4668f2f770b36a9ac3942c.jpeg" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </div>

                    <div className="ml-2">
                      <p className="text-lg font-semibold">Ankita T.</p>
                      <p className="text-sm text-muted-foreground">Assistant Marketing Manager</p>
                    </div>
                  </div>

                  <div style={{ marginTop:'10px'}} className="flex items-center w-fit m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="currentColor"  className="mr-2 text-[var(--iconColor,#ff0000)] transition-colors hidden sm:block"><circle cx="30" cy="30" r="30" fill="currentColor"></circle><path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff"></path><polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff"></polygon><path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff"></path></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  
                    </div>


                   <div >
                  <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground text-xl">
                  &quot;The fact that it can enrich emails just based on linkedin profile url is a very big advantage for any users.

the accuracy is also good when comparing it with the pricing it is offered at.

Direct dial numbers are found less but are an added advantage for sure.

The quality of direct dial numbers are quite good actually&quot;
                  </blockquote>

                 
                  </div>

                  
              </div>

          </CarouselItem>



          <CarouselItem key={5} className="md:basis-1/2 lg:basis-1/3">
              <div className="text-center w-[500px]  max-w-[90%] mt-[30%] p-2">
                
                 
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60" fill="currentColor"  className="m-auto text-[var(--iconColor,#ff0000)] transition-colors hidden sm:block"><circle cx="30" cy="30" r="30" fill="currentColor"></circle><path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff"></path><polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff"></polygon><path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff"></path></svg>
              <a target='blank' href='https://www.g2.com/products/useartemis/reviews#reviews' className=" text-xl font-semibold flex items-center justify-between mt-2">Read more reviews on G2 <ArrowRight/></a>
                  
              </div>

          </CarouselItem>
           
       
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>




    




    <div className="flex items-center">
      <div className="overflow-hidden  mt-20 sm:p-10 ">
     
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3 max-w-[800px] capitalize mt-4 ">
        Frequently asked questions
      </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] ">
        Explore our comprehensive FAQ to find quick answers to common inquiries. If you need further assistance, don&apos;t hesitate to contact us for personalized help.
        </p>
      </div>

    </div>





        <div className="grid sm:grid-cols-2">



          <div className="p-8  ">
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




          <div className="p-8  ">
            <div className=" w-full">
                <Accordion type="single" collapsible className="w-full">
                  
                    <AccordionItem value="item-1"  >
                      <AccordionTrigger className="text-left">What does 1 credit mean?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-semibold">
                      1 enrichment credit is equal to 1 lead with at least a verified email address.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">Do you offer discounts?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-semibold">
                      You can have a discount with our annual billing.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">Which payment methods are accepted?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-semibold">
                      All payments can be made via credit card and paypal.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">Do you offer invoice billing?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-semibold">
                      We can issue invoices for our users of our Pro and Enterprise plans.
                      </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
            
            </div>

            
        
          </div>


      </div>
     
    </div>
  )
}

