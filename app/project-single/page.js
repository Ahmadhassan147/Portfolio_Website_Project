"use client";
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import ProjectSingle from '@/components/ProjectSingle/ProjectSingle';
import React from 'react'

function page() {
  return (
    <>
    <Navbar />
    <ProjectSingle />
    <Footer />
    </>
  )
}

export default page