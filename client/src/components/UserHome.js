import { useState } from "react";
import Modal from "react-modal";
import "./UserHome.css";

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const myHostedEvents = [
        { id: 1, name: "Event 1" },
        { id: 2, name: "Event 2" },
        { id: 3, name: "Event 3" },
    ];
    const exploreEvents = [
        { id: 1, name: "Explore Event A" },
        { id: 2, name: "Explore Event B" },
        { id: 3, name: "Explore Event C" },
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
                        </Modal>
                    </div>
                </span>

                <div className="grid-container">{renderGridItems(myHostedEvents)}</div>
            </section>
            <section className="explore_section">
                <h2>Explore Events</h2>
                <div className="grid-container">
                    {renderGridItems(exploreEvents)}
                </div>
            </section>
        </div>
    );
};

export default Main;
