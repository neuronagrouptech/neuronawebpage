import React from "react";

const Copyright = () => {
  return (
      <footer className="bg-darkLeft text-whiteNeurona py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 flex justify-center">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} by Neurona Global Services. All Rights Reserved.
          </p>
        </div>
      </footer>
  );
};

export default Copyright;