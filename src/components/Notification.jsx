import React, { useState } from 'react';

const Notification = () => {
    // Fake notifications data for demonstration
    const initialNotifications = [
        { id: 1, message: 'New message received' },
        { id: 2, message: 'You have 3 new emails' },
        { id: 3, message: 'Reminder: Meeting at 2 PM' },
    ];

    const [notifications, setNotifications] = useState(initialNotifications);

    // Function to add a new notification
    const addNotification = (message) => {
        const newNotification = {
            id: Date.now(),
            message,
        };
        setNotifications([...notifications, newNotification]);
    };

    // Function to remove a notification by ID
    const removeNotification = (id) => {
        setNotifications(notifications.filter((notification) => notification.id !== id));
    };

    return (
            <div className="card p-2 " style={{ width: "20rem", height: "auto" }}>
                <div className="card-title text-primary fw-bold ">Notifications</div>
                <ul className="list-group">
                    {notifications.map((notification) => (
                        <li
                            key={notification.id}
                            className="pb-3 list-group-item d-flex justify-content-between align-items-center"
                        >
                            {notification.message}
                            <button
                                className="btn bg-primary btn-sm"
                                onClick={() => removeNotification(notification.id)}
                            >
                                Dismiss
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
    );
};

export default Notification;