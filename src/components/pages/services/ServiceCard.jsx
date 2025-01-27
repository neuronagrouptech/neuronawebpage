import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import PropTypes from "prop-types";

const ServiceCard = ({ icon, service, isExpanded, onToggle }) => (
  <motion.div
    className={`relative transition-all duration-500 ease-in-out cursor-pointer bg-darkLeft rounded-xl 
                hover:z-20 shadow-blueGreen overflow-hidden w-full min-h-[450px] ${
                  isExpanded ? "z-20 scale-105" : "z-10 scale-100"
                }`}
    layout
    onClick={onToggle}
  >
    <motion.div
      className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full"
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <motion.div
          className={`flex items-center justify-center text-whiteNeurona bg-transparent rounded-full 
                      ${
                        isExpanded
                          ? "w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                          : "w-[120px] h-[120px] md:w-[200px] md:h-[200px]"
                      }`}
          layout
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {icon}
        </motion.div>
        <button className="text-grayNeurona hover:text-whiteNeurona transition-colors mt-4 md:mt-0">
          <Plus className="h-6 w-6" />
        </button>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-light text-whiteNeurona mb-3 tracking-wide">
          {service.title}
        </h3>
        <p className="text-grayNeurona text-base md:text-lg font-light mb-3 leading-relaxed">
          {service.subtitle}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-3 space-y-3"
          >
            {service.details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blueGreen mt-2 flex-shrink-0" />
                <p className="text-grayNeurona text-lg leading-relaxed">
                  {detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </motion.div>
);

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ServiceCard;
