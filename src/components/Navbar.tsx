import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex h-20 items-center bg-supporting-neutrals-50">
      <div className="p-4">Logo</div>
      <h2>Good morning, Domenic!</h2>
      <input className="h-10" type="text" placeholder="Search..." />
      <div className="flex">
        <div className="flex">
          <p>Calendar</p>
          <p>Messages</p>
          <p>Notifications</p>
        </div>
        <div>Avatar</div>
      </div>
    </div>
  );
};

export default Navbar;
