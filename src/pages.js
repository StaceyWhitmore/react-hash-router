import React, { Component } from 'react';
import { Link, Route } from 'react-dom-router'
import { MainMenu, AboutMenu } from './ui/menus'
//import './stylesheets/pages.scss'

//import './App.css';

const PageTemplate = ({children}) =>
  <div className="page">
    <MainMenu />
    {children}
  </div>

//Home Navbar with <Link> components
export const Home = () =>
  <section className="home">
    <h1>The Website</h1>
    <nav>
      <Link to="About"/>
      <Link to="Events"/>
      <Link to="Products"/>
      <Link to="Contact Us"/>
    </nav>
  </section>

  export const Page404 = ({location}) =>
    <div className="page-404">
      <h1>Resource not found at '{location.pathname}'</h1>
    </div>

    export const Events = () =>
    <PageTemplate>
      <section className="events">
        <h1>Event Calendar</h1>
      </section>
    </PageTemplate>

    export const Products = () =>
    <PageTemplate>
      <section className="products">
        <h1>Product Catalog</h1>
      </section>
    </PageTemplate>

    export const Contact = () =>
    <PageTemplate>
      <section className="contact">
        <h1>Contact Us</h1>
      </section>
    </PageTemplate>

 //include {match} as arg (for routes)
 //Notice 1st Route has no path prop
  export const About = ({match}) =>
  <PageTemplate>
    <section className="about">
      <Route component={AboutMenu}/>
      <Route exact path="/about" component={Company}/>
      <Route path="/about/history" component={History} />
      <Route path="/about/services" component={Services} />
      <Route path="/about/location" component={Location} />
    </section>
  </PageTemplate>



  export const Services = () =>
    <Section>
      <h2>Our Services </h2>
      <p> </p>
      <p> </p>

    </Section>

  export const Location = () =>
  <Section>
    <h2>Our Location</h2>
    <p>     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
    </p>
    <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.

    </p>

  </Section>

  export const Company = () =>
  <Section>
    <h2>About the Company</h2>
    <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
    </p>
    <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
    </p>

  </Section>

  export const History = () =>
  <Section>
    <h2>Our Heritage</h2>
    <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
   </p>
   <p>
            Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
   </p>
  </Section>
