import React from 'react';
import { Link } from 'react-router-dom';
const Menu = ({ handleMenuItemClick }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '80px',
        left: '10px',
        width: '200px',
        background: '#E3EDF7',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '12px',
        padding: '10px',
        zIndex: 1,
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <img
          src="images/Frame 1000003850.png"
          alt="Company Logo"
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (11).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
              <a
            href="/check-in-out-master"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check in out master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="images\Combined-Shape1.png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
           <a
            href="/Dashboard"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dashboard
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="images\icons8-male-user-24.png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
         <a
            href="/My-Profile"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Profile
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (2).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/Calendar"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Calendar
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (3).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
         <a
            href="/Meeting-Master"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Meeting Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="images\icons8-task-completed-50.png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
         <a
            href="/My-Task"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Task
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (9).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/Leave-Master"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (6).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
         <a
            href="/Notification-Master"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Notification Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (8).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
        <a
            href="/Learning-Center"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning Center
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (9).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/Policy-master"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Policy Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (10).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/Badges"  // Replace with the desired URL or path
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Poppins',
              display: 'inline-block',
              lineHeight: 1,
            }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Badges
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
