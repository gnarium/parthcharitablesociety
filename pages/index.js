import Head from 'next/head'
import Link from 'next/link'
import React, { useRef, useState } from "react";
import ReactHover from 'react-hover'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
const optionsCursorTrueWithMargin = {
    followCursor:true,
    shiftX:20,
    shiftY:0
} 
export default function Home() {
  return (
        <div>
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <img src="assets/images/slider6.jpg" alt="slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="assets/images/slider4.jpg" alt="slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="assets/images/slider5.jpg" alt="slider"/>
                </SwiperSlide>
                
            </Swiper>
            <section className="service_area">
                <div class="container-fluid p-0">
            <div class="row no-gutters justify-content-center">
                <div class="col-lg-4">
                    <div class="single_services text-center services_1">
                        <div class="services_icon">
                            <img src="assets/images/s-icon-1.png" alt="icon"/>
                        </div>
                        <div class="services_content">
                            <h4 class="services_title"><a href="#">Be a Volunteer</a></h4>
                            <p>Parth charitable Trust is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                        <a href="#"><button className="btn btn-default">Read More</button></a>
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="single_services active_2 text-center services_2">
                        <div class="services_icon">
                            <img src="assets/images/s-icon-2.png" alt="icon"/>
                        </div>
                        <div class="services_content">
                            <h4 class="services_title"><a href="#">Donate Now</a></h4>
                            <p>Parth charitable Trust is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                        <a href="#"><button className="btn btn-default">Read More</button></a>
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="single_services text-center services_3">
                        <div class="services_icon">
                            <img src="assets/images/s-icon-3.png" alt="icon"/>
                        </div>
                        <div class="services_content">
                            <h4 class="services_title"><a href="#">Send Gift</a></h4>
                            <p>Parth charitable Trust is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>

                        </div>
                        <a href="#"><button className="btn btn-default">Read More</button></a>
                    </div> 
                </div>
            </div> 
        </div> 
            </section>
            <section class="campaing_doner_area" >
        <div class="campaing_area pt-130 pb-110">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-30">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 class="title">Featured Camapaign</h3>
                        </div> 
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-5">
                        <div class="campaing_nav pt-15">
                            <ul class="nav" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="active" id="hospital-tab" data-toggle="tab" href="#hospital" role="tab" aria-controls="hospital" aria-selected="true">
                                        <div class="campaing_items items_color_1 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/help-1.jpg" style={{width:'80px'}}  alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title" style={{textAlign:'justify'}}>Women and Child Development </h4>
                                                <p style={{textAlign:'justify'}}>Our organization is helping needed children and women by providing them food and work making them self dependent .</p>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a id="cancer-tab" data-toggle="tab" href="#cancer" role="tab" aria-controls="cancer" aria-selected="false">
                                        <div class="campaing_items items_color_2 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/ChildEducation.jpg" style={{width:'80px'}} alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title" style={{textAlign:'justify'}}>Child Education </h4>
                                                <p style={{textAlign:'justify'}}>We organize educational classes for students who are not able to go to schools because of their financial conditions and other problems , we also donate books and other stationary to help them keep pushing their education .</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a id="environtment-tab" data-toggle="tab" href="#environtment" role="tab" aria-controls="environtment" aria-selected="false">
                                        <div class="campaing_items items_color_3 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/EnvironmentalProtection.jpg" style={{width:'80px'}} alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 style={{textAlign:'justify'}} class="items_title">Environmental Protection </h4>
                                                <p style={{textAlign:'justify'}}>Our organization is planting  trees. They give us two of the most crucial elements for our survival: oxygen and books. Be part of this campaign and help us to plant more and more trees for our future.</p>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                            </ul>
                        </div> 
                    </div>

                    <div class="col-lg-7">
                        <div class="campaing_tab_content mt-30">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="hospital" role="tabpanel" aria-labelledby="hospital-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/help-1.jpg"  alt=""/>

                                        <div class="campaing_donate" style={{marginTop:'250px'}}>
                                            <div class="donate_dollar d-flex justify-content-between" style={{color:'white'}}>
                                               <span style={{color:'white'}}>We make a living by what we get, but we make a life by what we give.</span>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab-pane fade" id="cancer" role="tabpanel" aria-labelledby="cancer-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/ChildEducation.jpg" alt=""/>

                                        <div class="campaing_donate" style={{marginTop:'250px'}}>
                                            <div class="donate_dollar d-flex justify-content-between" style={{color:'white'}}>
                                                <h4 class="items_title" style={{color:'white'}}>We make a living by what we get, but we make a life by what we give.</h4>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab-pane fade" id="environtment" role="tabpanel" aria-labelledby="environtment-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/EnvironmentalProtection.jpg" alt=""/>

                                        <div class="campaing_donate" style={{marginTop:'250px'}}>
                                            <div class="donate_dollar d-flex justify-content-between">
                                                <h4 class="items_title" style={{color:'white'}}>We make a living by what we get, but we make a life by what we give.</h4>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
    </section>
    <br/><br/><br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center pb-30">
                            <h3 className="title">Our Running Camapaign</h3>
                        </div>
                </div>
            </div> 
            </div>
            <div className=" col-lg-12">
            <div className="container">
                <div className="row">
                        <div class="containercampaign">
                        <img src="assets/images/Food distribution.jpg" alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>We distribute food packages to people who are in need , especially poor colonies where they only can arrange food for them , only one time in a day .</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Food distribution </h6>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Empowering Women socially and Economically.jpg" alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>Our NGO’s main motto is to help women who are in need of either educational help or financial help. We help them with maximum support we can provide.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Empowering Women socially and Economically </h6>
                            </div> 
                            <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Child Development And Their Education.jpg" alt="Avatar" class="image"/>
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>We provide books and stationary to children who are not able to go to school, we also arrange weekly teaching hours to teach poor children and organise events like art and craft to increase creativity among them.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Child Development And Their Education </h6>
                            </div> 
                            <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Fitness Awareness.jpg" alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>A healthy brain resides under a healthy body as the saying says parth charitable society 
                                    Organising yoga , bicycle rally ,dance competition  etc events and making people aware about it’s benefits for each category of people .
                                </div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Fitness Awareness : Daily Yoga </h6>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Tree Plantation.jpg" alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>No life is possible without trees because  oxygen is essential for all living beings , but people are cutting trees in huge amounts , planting very less of them so our NGO is taking an initiative and planting trees and also organising an awareness program to aware people about its effects.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title"style={{textAlign:'center'}}>Tree Plantation </h6>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Helping Animals.jpg" alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>There are a lot of animals we can see on the roads who have no home and shelter , our ngo has launched a campaign to give something to eat to at least one animal of their locality.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Helping Animals </h6>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Healthcare.jpg" alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>Not every person is capable of paying healthcare bills and buying costly medicines , we as a NGO, try to help people who need medications and provide them medications and also generate funds to help them.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Healthcare</h6>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Sanitation.jpg" alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>As in  India we say “laxmi wahi was karti hai jaha swachta hoti hai ” so our earth is our home and making it clean is every person’s responsibility . Volunteers of our NGO  organise awareness programs from time to time to make people remember their social responsibility.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Sanitation </h6>
                            </div> 
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" >
                    <div class="containercampaign" style={{marginLeft:'350px'}} id="containercampaign1">
                        <img src="assets/images/Drinking Water.jpg"  alt="Avatar" class="image" />
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify',fontSize:'15px'}}>In india in summers we start this campaign first we provide water for birds and animals at our home roofs and at front of our houses , and we also  arrange a “ drinking water point “ so that people who need water can drink from there, we are also running an initiative for cleaning our rivers so that we can drink clean water.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h6 class="title" style={{textAlign:'center'}}>Drinking Water</h6>
                            </div> 
                    </div>
                    

                </div>
            </div>
    <section className="volunteer_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon"/>
                        <h3 className="title">Our Top Doners</h3>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_1">
                        <div className="volunteer_image">
                            <img src="assets/images/Dr Archana Singh.jpg" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Dr Archana Singh</a></h5>
                                
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_2">
                        <div className="volunteer_image">
                            <img src="assets/images/Bhagwan Singh.jpg"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Bhagwan Singh</a></h5>
                                
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_3">
                        <div className="volunteer_image">
                            <img src="assets/images/SP Singh.jpg"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">S P Singh</a></h5>
                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

    <section className="volunteer_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon"/>
                        <h3 className="title">Our Members</h3>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_1">
                        <div className="volunteer_image">
                            <img src="assets/images/Anita Singh Bisen Ji Founder.jpg" alt="Volunteer"/>
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name" style={{textAlign:'left'}}><a href="#">Anita Singh Bisen Ji</a></h5>
                                <p>Founder</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_2">
                        <div className="volunteer_image">
                            <img src="assets/images/Kajal Singh Vice President.jpg"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Kajal Singh</a></h5>
                                <p>Vice President</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_3">
                        <div className="volunteer_image">
                            <img src="assets/images/Shalini Pandey Vice President.jpg"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Shalini Pandey</a></h5>
                                <p>Vice President</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/Pooja Singh.jpg" alt="Volunteer"/>
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Pooja Singh</a></h5>
                                <p>Treasurer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div> 
        </div> 
    </section>
    <div className="container" id="center">
        <div className="row">
            <div className="col-lg-3 col-sm-12">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/Manorama Ji Chief Secreatory.jpg" className="center" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Manorama Ji</a></h5>
                                <p>Chief Secreatory</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/pooja singh Chandel Sachiv( Secretary).jpg" className="center" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">pooja singh Chandel</a></h5>
                                <p>Sachiv( Secretary)</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-12" >
                    <div className="single_volunteer mt-30 volunteer_color_4" >
                        <div className="volunteer_image" >
                            <img src="assets/images/Sunil Singh Chief Incharge.jpg" className="center" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Sunil Singh </a></h5>
                                <p>Chief Incharge</p>
                            </div>
                        </div>
                    </div> 
                </div>
        </div>
        </div>
    <section className="volunteer_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <h3 className="title" style={{textAlign:'center'}}>Gallery</h3>
                        <Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                            "clickable": true
                        }} navigation={true} className="mySwiper">
                            <SwiperSlide>
                                <img src="assets/images/Fitness 1.jpeg" style={{height:'250px',width:'250px'}}  alt="Volunteer"/ >
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 2.jpeg" style={{height:'250px',width:'250px'}}  alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness Awareness.jpg" style={{height:'250px',width:'250px'}} alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 4.jpeg" style={{height:'250px',width:'250px'}} alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 5.jpeg" style={{height:'250px',width:'250px'}}  alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 6.jpeg"  style={{height:'250px',width:'250px'}} alt="Volunteer"/>
                            </SwiperSlide>
                        </Swiper> 
                    </div>
            </div> 
        </div>
    </section>
    <div class="donate_btn" style={{textAlign:'center'}}>
            <a href="/cause" class="main-btn" >View More </a>
    </div>    
    <section className="volunteer_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <h3 className="title">Follow Us On Facebook</h3>
                        <div className="single_volunteer mt-30 volunteer_color_3">
                            <div className="volunteer_image">
                            <div class="fb-page" data-href="https://www.facebook.com/&#x92a;&#x93e;&#x930;&#x94d;&#x925;-&#x91a;&#x948;&#x930;&#x93f;&#x91f;&#x947;&#x92c;&#x932;-&#x938;&#x94b;&#x938;&#x93e;&#x907;&#x91f;&#x940;-101693645043791/" data-tabs="timeline" data-width="600" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/&#x92a;&#x93e;&#x930;&#x94d;&#x925;-&#x91a;&#x948;&#x930;&#x93f;&#x91f;&#x947;&#x92c;&#x932;-&#x938;&#x94b;&#x938;&#x93e;&#x907;&#x91f;&#x940;-101693645043791/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/&#x92a;&#x93e;&#x930;&#x94d;&#x925;-&#x91a;&#x948;&#x930;&#x93f;&#x91f;&#x947;&#x92c;&#x932;-&#x938;&#x94b;&#x938;&#x93e;&#x907;&#x91f;&#x940;-101693645043791/"></a></blockquote></div>
                            </div>
                        
                        </div> 
                </div>
                <div className="col-lg-6 col-sm-6">
                    
                <h3 className="title">Follow Us On Twitter</h3>
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                        <a class="twitter-timeline" data-width="600" data-height="600" data-theme="dark" href="https://twitter.com/AnitaSi41811963?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  
                        </div>
                    </div> 
                </div>
                
            </div> 
        </div> 
    </section>

    
        </div>
  )
}
