"use client"
import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'
import ProfilePageLeftImage from '@/components/LandingPage/ProfilePageLeftImage'
import ProjectList from '@/components/Projects/ProjectList'
import Projects from '@/components/Projects/Projects'
import ProjectsHero from '@/components/Projects/ProjectsHero'
import Head from 'next/head'
import React from 'react'
function page() {
  
  return (
    <>
    <Navbar  />
    <ProjectsHero />
    <ProjectList/>
    <Footer />
    </>
  )
}

export default page