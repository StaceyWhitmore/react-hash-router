import React, { Component } from 'react'
import { Link, Route } from 'react-dom-router'
import { MainMenu, AboutMenu } from './ui/menus'
//import './stylesheets/pages.scss'
//import './App.css';

export const Home = () =>
  <section className="home">
    <h1>Home Page</h1>
  </section>

  export const About = () =>
    <section className="about">
      <h1>About</h1>
    </section>

export const Events = () =>
  <section className="events">
    <h1>Events</h1>
  </section>

export const Products = () =>
  <section className="products">
    <h1>Products</h1>
  </section>

export const Contact = () =>
  <section className="contact">
    <h1>Contact Us</h1>
  </section>
