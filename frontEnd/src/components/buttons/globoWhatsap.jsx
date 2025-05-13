import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  return (
    <div>
      <div>
        <Link to="/whatsapp">
          <div className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-white text-2xl"
            />
          </div>
          <div>
            <p>Whatsapp</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Whatsapp;
