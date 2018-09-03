import React from 'react';
import '../css/article.css';

class Article extends React.Component {
    render() {
        return(
            <div>
  
  <div className="container">
    <div className="row p-3">
      <div className="col-4">
        <a href="#" className="btn btn-outline-secondary small-text">Upgrade</a>
      </div>
      <div className="col-4">
        <div className="text-center text-dark">
          <h2>Medium</h2>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-end">
        <i className="fas fa-search" />
        <i className="far fa-bell ml-5" />
        <img src="https://cdn-images-1.medium.com/fit/c/32/32/0*7P7X2t3m7HvMUa38" height={20} width={20} className="ml-5" />      
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-2" />
      <div className="col-10">
        <h6>Applause from Onyinyechi Maviceclara and 6 others</h6>
      </div>
    </div>
    <div className="row">
      <div className="col-2" />
      <div className="col-1">
        <img src="https://cdn-images-1.medium.com/fit/c/40/40/1*4XurX2NEkgS1N6eyAj4spQ.jpeg" className="avatar-image avatar-image--smaller" alt="Go to the profile of Kati Frantz" />
      </div>
      <div className="col-9">
        <h6 className="__kati"><span>kati frantz</span> <span><button type="button" className="btn btn-outline-success ml-2">follow</button></span></h6>
        <h6 className="__kati1">Oct 23, 2017.3 mins read</h6>
      </div>
    </div>
    <div className="__learn">
      <h1>Learn React in a few days or less. How I did it, and how you can do it too.</h1>
      <p>The past few weeks, I’ve been going through the Andela application process (Am already in love with this company ). It’s been crazy. I love writing JavaScript, and I am so into Vue.js, because of its simplicity compared to other frameworks. A week ago, after making it into Andela’s boot-camp, I was informed our final project would require building a complete project, with React and Redux as the front-end framework. 😀
        I have just a week to learn a framework, and just over 6 hours on each day , how crazy is that ? Obviously, my first instinct was to think: “I could never do this . It took me months to even get proficient at Vue.js, what about React ?!!! And then there’s Redux ” .
        Something very important came to mind at this point, growth mindset. I could get better at anything with the right amount of dedication and hard work.I decided “I could do this”, and here’s how I did. I’m no React Ninja yet, but I have build a couple of apps in react and redux, and I’ll get better at it as the days go by. I brought out some decisions and tutorials that helped my accomplish this in such a short period of time, and these might help you too.</p>
      <strong> <span><h4>1.know JavaScript</h4></span></strong>
      <p>In 2017, new JavaScript frameworks are created every single week, and the only way not to get overwhelmed with the increasing number of frameworks is if you know the primary language, JavaScript. If you know the fundamentals of the programming language used to build these frameworks, you are off for a good start in learning them .</p>
      <strong><span> <h4>2. Master at least one framework.</h4></span></strong>
      <p>There are a thousand frameworks, most of them flow around the same idea, knowing one , and knowing it well would put you on a really good position of learning the next real fast.</p>
      <strong><span><h4>3. Have a clear to-do list of what to learn on each day.</h4></span></strong>
      <p>I had 7 days. I thought to myself, There could be key topics I can master per day. I visited the React documentation, and I made out this plan to help me.</p>
      <p><strong> <span>Sunday:</span></strong>  Sunday: React Hello World, Introducing JSX, Rendering Elements. Browse youtube, Watch videos on React Hello World, Introducing JSX, and Rendering Elements</p> 
      <p><strong><span> Monday:</span></strong> Components and props, Handling Events, Forms, Create a Todos List with React</p>
      <p><strong><span>Tuesday:</span></strong> Conditional Rendering , List and Keys, Lifting State Up, Composition Vs Inheritance, and Thinking in React In three days, I was able to complete the basics of React, and build a simple to-dos application. But that’s not all I’m gonna need If I’ll be building a complete application. The next days touched more specific topics.</p>
      <p><strong><span>wednesday:</span></strong><a href="#" className="text-dark"> React Router</a></p>
      <p><strong><span>Thursday:</span></strong><a href="#" className="text-dark"> Testing React Components, Easy UI testing with React components</a></p>
      <p><strong><span>Friday:</span></strong> Complete Guide to Redux</p>
      <strong><span><h4>4. Build, Build, Build </h4></span></strong>
      <p>After I completed the above mentioned topics, the only thing lacking was to build some real stuff. Some of the tutorials I went through are:</p>
      <p>Build A Search Locations App</p>
      <p>Build a random Profile page app</p>
      <p>Working with external Data in React</p>
      <p>After building the apps listed above, I felt the confidence of being able to tackle whatever react challenges I faced.</p>
      <p>In two weeks, I’ll be updating this blog post with the app I built with React in just three weeks. I guarantee you’ll be impressed ! 😄</p>
      <div className>
        <span className="mx-2"><a href="#" className="text-muted">React</a></span>
        <span className="mx-2"><a href="#" className="text-muted">Andela boot-camp</a></span>
        <span className="mx-2"><a href="#" className="text-muted">Andela</a></span>
        <span className="mx-2"><a href="#" className="text-muted">Andela boot-camp Nigeria</a></span>
        <span className="mx-2"><a href="#" className="text-muted">Learn React Js</a></span>
      </div>
      <div>
        <h5 className="mt-4"><strong>Like what you read? Give Kati Frantz a round of applause.</strong></h5>
        <p>From a quick cheer to a standing ovation, clap to show how much you enjoyed this story.</p>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row p-3">
            <div className="col-4">
              <a href="#"> <i className="far fa-heart text-dark" /></a>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <a href="#"> <i className="far fa-comment  text-secondary" /></a>
              <a href="#"> <i className="fab fa-twitter ml-3 text-secondary" /></a>
              <a href="#"> <i className="fab fa-facebook ml-3 text-secondary" /></a> 
              <a href="#"> <i className="far fa-bookmark ml-3 text-secondary" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default Article;