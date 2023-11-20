import { useState } from "react";
import Modal from "react-modal";
import "./UserHome.css";
import { Link } from "react-router-dom";

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const myHostedEvents = [
        { id: 1, name: "Downtown Meet Up" },
        { id: 2, name: "Walk Through Campus" },
        { id: 3, name: "Office Party" },
    ];
    const exploreEvents = [
        { id: 1, name: "Stanley's Birthday" },
        { id: 2, name: "Outdoor Concert" },
        { id: 3, name: "Soccer Fun" },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderGridItems = (events) => {
        return events.map((event) => (
            <div key={event.id} className="grid-item">
                {event.name}
            </div>
        ));
    };

    return (
        <div className="main_container">
            <nav className="navbar">
                <h1>Evently.</h1>
                <button className="white_btn" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <section className="events_section">
                <span>
                    <div className="events_header">
                        <h2>My Hosted Events</h2>
                        <button className="addevent" onClick={openModal}>
                            Add Event
                        </button>
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Add Event Modal"
                        >
                            <h2>Add Event</h2>
                            {/* Your add event form or content goes here */}
                            <button onClick={closeModal}>Close</button>
                            <form>
                                <label> Event Name:
                                    <input type="text" name="eventName" required />
                                </label>
                                <label>
                                    Location:
                                    <input type="text" name="location" required />
                                </label>
                                <label>
                                    Date:
                                    <input type="date" name="date" required />
                                </label>
                                <button type="submit"> Submit</button>
                            </form>

                        </Modal>
                    </div>
                </span>

                <div className="grid-container">
                    
                    <Link to="/event" className="link">
                        {renderGridItems(myHostedEvents)}
                    </Link>
                </div>
            </section>
            <section className="explore_section">
                <h2>Explore Events</h2>
                <div className="grid-container">
                <Link to="/event" className="link">
                    {renderGridItems(exploreEvents)}
                </Link>
                </div>
            </section>
        </div>
    );
};

export default Main;
