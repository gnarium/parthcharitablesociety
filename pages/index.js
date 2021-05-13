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
                    <img src="assets/images/Healthcare.jpg" alt="slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="assets/images/Child Development And Their Education.jpg" alt="slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="assets/images/Sanitation.jpg" alt="slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="assets/images/Tree Plantation.jpg" alt="slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="assets/images/ChildEducation.jpg" alt="slider"/>
                </SwiperSlide>
                
            </Swiper>
            <section className="service_area">
                <div className="container-fluid p-0">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-lg-4">
                            <div className="single_services text-center services_1">
                                <div className="services_icon">
                                    <img src="assets/images/s-icon-1.png" alt="icon"/>
                                </div>
                                <div className="services_content">
                                    <h4 className="services_title"><a href="#">Women and Child Development </a></h4>
                                        <p>Parth Charitable Trust is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single_services active_2 text-center services_2">
                                <div className="services_icon">
                                    <img src="assets/images/s-icon-2.png" alt="icon"/>
                                </div>
                                <div className="services_content">
                                    <h4 className="services_title"><a href="#">Child Education</a></h4>
                                        <p>Parth Charitable Trust is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4">
                            <div className="single_services text-center services_3">
                                <div className="services_icon">
                                    <img src="assets/images/s-icon-3.png" alt="icon"/>
                                </div>
                                <div className="services_content">
                                    <h4 className="services_title"><a href="#">Environmental Protection</a></h4>
                                        <p>Parth Charitable Trust is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
            <section class="campaing_doner_area">
        <div class="campaing_area pt-130 pb-110">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-30">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 class="title">Our Running Camapaign</h3>
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
                                                <img src="assets/images/help-1.jpg"  alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title">Women and Child Development</h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a id="cancer-tab" data-toggle="tab" href="#cancer" role="tab" aria-controls="cancer" aria-selected="false">
                                        <div class="campaing_items items_color_2 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/ChildEducation.jpg" alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title">Child Education </h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a id="environtment-tab" data-toggle="tab" href="#environtment" role="tab" aria-controls="environtment" aria-selected="false">
                                        <div class="campaing_items items_color_3 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/EnvironmentalProtection.jpg" alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title">Environtmental Protection</h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
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
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div class="campaing_donate">
                                            <div class="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div> 
                                            <div class="donate_progress">
                                                <div class="bar_inner">
                                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab-pane fade" id="cancer" role="tabpanel" aria-labelledby="cancer-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div class="campaing_donate">
                                            <div class="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div> 
                                            <div class="donate_progress">
                                                <div class="bar_inner">
                                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab-pane fade" id="environtment" role="tabpanel" aria-labelledby="environtment-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div class="campaing_donate">
                                            <div class="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div> 
                                            <div class="donate_progress">
                                                <div class="bar_inner">
                                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                                </div>
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

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center pb-30">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 className="title">Featured Camapaign</h3>
                        </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Food distribution.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text">We distribute food packages to people who are in need , especially poor colonies where they only can arrange food for them , only one time in a day </div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title" style={{textAlign:'justify'}}>Food distribution</h4>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Empowering Women socially and Economically.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text">Our NGO’s main moto is to help women who are in need either it is educational help or financial we help them with maximum support we can provide.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title" style={{textAlign:'justify'}}>Empowering Women socially and Economically</h4>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Child Development And Their Education.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text">We provide books and stationary to children who are not able to go to school, we also arrange weekly teaching hours to teach poor children and organise events like art and craft to increase creativity among them.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title" style={{textAlign:'justify'}}>Child Development And Their Education</h4>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Fitness Awareness.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify'}}>A healthy brain resides under a healthy body as the saying says parth charitable society Organising yoga , bicycle rally ,dance competition  etc events and making people aware about it’s benefits for each category of people . </div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title">Fitness Awareness</h4>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Tree Plantation.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify'}}>No life is possible without trees because  oxygen is essential for all living being , but people are cutting trees in huge amounts , planting very less of them so our NGO is taking an initiative and planting trees and also organising an awareness program to aware people about its effects.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title">Tree Plantation</h4>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Helping Animals.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify'}}>There are a lot of animals we can see on the roads who have no home and shelter , our ngo has launched a campaign to give something to eat to at least one animal of their locality.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title">Helping Animals</h4>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Healthcare.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify'}}>Not every person is capable of paying healthcare bills and buying costly medicines , we as a NGO, try to help people who need medications and provide them medications and also generate funds to help them.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title">Healthcare</h4>
                            </div> 
                    </div>
                    <div class="containercampaign">
                        <img src="assets/images/Sanitation.jpg" alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify'}}>As in  india we say “laxmi wahi was karti hai jaha swachta hoti hai ” so our earth is our home and making it clean is every person’s responsibility . Volunteer of our NGO  organise awareness program time to time to make people remember their social responsibility.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title">Sanitation</h4>
                            </div> 
                    </div>
                    
                    <div class="containercampaign" >
                        <img src="assets/images/Drinking Water.jpg"  alt="Avatar" class="image" style={{height:'400px'}}/>
                            <div class="overlay">
                                <div class="text" style={{textAlign:'justify'}}>In india in summers we start this campaign first we provide water for birds and animals at our home roofs and at front of our houses , and we also  arrange a “ drinking water point “ so that people who need water can drink from there, we are also running an initiative for cleaning our rivers so that we can drink clean water.</div>
                            </div>
                            <div class="text-center mb-30">
                                <h4 class="title">Drinking Water</h4>
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
                            <img src="assets/images/1.jpg" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Maria Noor</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_2">
                        <div className="volunteer_image">
                            <img src="assets/images/2.jpg"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Kiara Roy</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_3">
                        <div className="volunteer_image">
                            <img src="assets/images/Akanshu.jpg"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Adams Hobes</a></h5>
                                <p>Volunteer</p>
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
                                <h5 className="volunteer_name"><a href="#">Anita Singh Bisen Ji</a></h5>
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
                                <p>Vice President</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/Manorama Ji Chief Secreatory.jpg" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Manorama Ji</a></h5>
                                <p>Chief Secreatory</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/pooja singh Chandel Sachiv( Secretary).jpg" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">pooja singh Chandel</a></h5>
                                <p>Sachiv( Secretary)</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/Sunil Singh Chief Incharge.jpg" alt="Volunteer"/>
                             
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
    </section>
    <section className="volunteer_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12" style={{height:'500px'}}>
                    <h3 className="title" style={{textAlign:'center'}}>Gallery</h3>
                        <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                            "clickable": true
                        }} navigation={true} className="mySwiper">
                            <SwiperSlide>
                                <img src="assets/images/Fitness 1.jpeg"  alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 2.jpeg"  alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness Awareness.jpg"  alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 4.jpeg"  alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 5.jpeg"  alt="Volunteer"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/Fitness 6.jpeg"  alt="Volunteer"/>
                            </SwiperSlide>
                        </Swiper> 
                    </div>
            </div> 
        </div>
    </section>
    <div class="donate_btn" style={{textAlign:'center'}}>
            <a href="/cause" class="main-btn" >Click here </a>
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
