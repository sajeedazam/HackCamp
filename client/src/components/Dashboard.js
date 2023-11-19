import "./Dashboard.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <body>
       <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
        />

        <div class = "page">
            
            <div class="header">
                <div class= "headalign">
                    <img class= "profilepic" src= "http://www.w3.org/2000/svg"></img>
                    <h1 class = "title">Placeholder</h1>
                </div>
            </div>
    
            <div class = "events">
            <h2>My Events</h2>
            <button class = "addevent">+ New Event</button>
            <div class="grid-container">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
            </div>
            </div>
    
            <div class = "explore">
            <h2>Explore</h2>
            <div class="grid-container">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
            </div>
            </div>
        </div>
    </body>
  );
};

export default Dashboard;
