import React from 'react'
import avatar1 from '../../assets/img/Jobs_img/2.png';
import airbnbLogo from '../../assets/img/Jobs_img/airbnb.png';
import hubspotLogo from '../../assets/img/Jobs_img/HubSpot.png';
import googleLogo from '../../assets/img/Jobs_img/Google.png';
import microsoftLogo from '../../assets/img/Jobs_img/Microsoft.png';
import walmartLogo from '../../assets/img/Jobs_img/Walmart.png';
import fedexLogo from '../../assets/img/Jobs_img/FedEx.png';
import arrowIcon from '../../assets/img/Jobs_img/arrow.svg';
import searchIcon from '../../assets/img/Jobs_img/search.svg';
import './jobspage.css';

import JobCard from './JobCard'

const Jobs = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className="header">
                        <div className="avatars-small">
                            <img src={avatar1} alt="Avatar 1" />
                        </div>
                        <div className="title">
                            <h1>Find & Hire Top Talented From The World.</h1>
                            <p>
                                Most talented employees and world class companies here
                            </p>
                            <form id="looking-for-job" className="form" action="#">
                                <p className="radio-text">Looking for a job?</p>
                                <div className="radio-item">
                                    <input type="radio" id="Job" name="role" value="Job" />
                                    <label className="radio-inline" for="Job">Job</label>
                                </div>
                                <div className="radio-item">
                                    <input type="radio" id="Hire" name="role" value="Hire" />
                                    <label className="radio-inline" for="Hire">Hire</label>
                                </div>
                            </form>
                            <div className="search">
                                <input type="text" placeholder="Job title, keywords, or ct" />
                                <button>Search</button>
                            </div>
                        </div>

                        <div className="avatars">
                            <img src={avatar1} alt="Avatar 2" />
                        </div>
                    </div>
                </div>
                <div className="scrolling-logos">
                    <div className="logos">
                        <img src={airbnbLogo} alt="Airbnb" />
                        <img src={hubspotLogo} alt="HubSpot" />
                        <img src={googleLogo} alt="Google" />
                        <img src={microsoftLogo} alt="Microsoft" />
                        <img src={walmartLogo} alt="Walmart" />
                        <img src={fedexLogo} alt="FedEx" />
                    </div>
                </div>
                <div className="container">

                    <div className="card-heading">
                        <div className="card-heading-text">
                            <h2 className="demandingJob">High Demanding Job</h2>
                            <h2 className="cat">Categories</h2>
                        </div>

                        <button className="button">
                            Explore All Categories
                            <img className="arrow" style={{ display: 'inline' }} src={arrowIcon} alt="arrow" />
                        </button>

                    </div>
                    <div className="catagories">
                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />

                            <h3>Design & Development</h3>
                            <p>74+ Active Jobs</p>
                        </div>
                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />

                            <h3>Management & Solutions</h3>
                            <p>45+ Active Jobs</p>
                        </div>
                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />

                            <h3>Business & Marketing</h3>
                            <p>58+ Active Jobs</p>
                        </div>
                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />

                            <h3>Customer Help & Support</h3>
                            <p>100+ Active Jobs</p>
                        </div>
                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />

                            <h3>Research & Experience</h3>
                            <p>32+ Active Jobs</p>
                        </div>
                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />
                            <h3>Accounting & Experience</h3>
                            <p>47+ Active Jobs</p>
                        </div>
                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />

                            <h3>Business Solution & Marketing</h3>
                            <p>85+ Active Jobs</p>
                        </div>

                        <div className="catagory">
                            <img className="" src={searchIcon} alt="search" />

                            <h3>Video Edition & 3D Art</h3>
                            <p>52+ Active Jobs</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Job Opportunities section */}

            <div className="container">
                <div className="row catagories">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>

            <div className='container'>
                <div >
                    <h3 className="text-center my-5" style={{ fontWeight: "900" }}>Find your need with jobfi</h3>
                    <div className="d-flex flex-wrap align-items-center justify-content-around jobsCompany__detail" style={{ gap: "12px" }}>
                        <span className="d-flex flex-column align-items-center justify-content-center text-light text-center">
                            <p className='m-0 jobdetail__Number'>20k+</p>
                            <p className='m-0 jobdetail__heading'>Dummy text</p>
                        </span>
                        <span className="d-flex flex-column align-items-center justify-content-center text-light text-center">
                            <p className='m-0 jobdetail__Number'>60+</p>
                            <p className='m-0 jobdetail__heading'>Dummy text</p>
                        </span>
                        <span className="d-flex flex-column align-items-center justify-content-center text-light text-center">
                            <p className='m-0 jobdetail__Number'>40k+</p>
                            <p className='m-0 jobdetail__heading'>Dummy text</p>
                        </span>
                        <span className="d-flex flex-column align-items-center justify-content-center text-light text-center">
                            <p className='m-0 jobdetail__Number'>98%+</p>
                            <p className='m-0 jobdetail__heading'>Dummy text</p>
                        </span>
                    </div>
                </div>
            </div>



        </>


    )
}

export default Jobs
