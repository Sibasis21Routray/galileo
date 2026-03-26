import { motion } from "framer-motion";

const PageNotFound = () => {

    // Floating 404 text
    const floatText = {
        y: [0, -8, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
            {/* Subtle decorative elements */}
            <div className="absolute left-0 right-0 flex justify-center space-x-4">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2 + i, repeat: Infinity }}
                        className="w-2 h-2 bg-[#29f67a] rounded-full"
                    />
                ))}
            </div>

            {/* Floating 404  */}
            <motion.div
                animate={floatText}
                className="mb-6"
            >
                <div className="h-40 [filter:url(#greenTint)]">
                    <svg className="hidden">
                        <filter id="greenTint" colorInterpolationFilters="sRGB">
                            <feColorMatrix type="matrix" values="
                            0   0   0   0 0.161
                            0   0   0   0 0.965
                            0   0   0   0 0.478
                            0   0   0   1 0
                        "/>
                        </filter>
                    </svg>
                    <img
                        src="/pageNotFound/web.png"
                        alt="Logo"
                        className="object-contain h-full w-full"
                    />
                </div>
            </motion.div>
            
            {/* Error message */}
            <div className="max-w-md mx-auto mb-10">
                <h2 className="text-2xl font-medium text-white mb-3">
                    Page Not Found
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    The page you're looking for doesn't exist or may have been moved.
                </p>
            </div>
        </div>
    );
};

export default PageNotFound;