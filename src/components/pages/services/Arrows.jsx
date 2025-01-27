import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

export const NextArrow = ({ className, onClick }) => (
    <div
      className={`${className} custom-arrow-next flex items-center justify-center`}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <ChevronRight className="text-white w-5 h-5" />
    </div>
  );
  
  export const PrevArrow = ({ className, onClick }) => (
    <div
      className={`${className} custom-arrow-prev flex items-center justify-center`}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <ChevronLeft className="text-white w-5 h-5" />
    </div>
  );
  
NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
