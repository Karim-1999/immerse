// import css and js
import "./subCareer/Career.css"
// import components
import { NavCareer } from "./subCareer/NavCareer";
import { BannerCareer } from "./subCareer/BannerCareer";
import { DescCareer } from "./subCareer/DescCareer";
import { GalleryCareer } from "./subCareer/GalleryCareer";
import { JobCareer } from "./subCareer/JobCareer";
import { FooterCareer } from "./subCareer/FooterCareer";

export function CareerHome() {
    return(
        <>
         <NavCareer /> 
         <BannerCareer />  
         <DescCareer />
         <GalleryCareer />
         <JobCareer />
         <FooterCareer />
        </>
    )
}