import { motion } from "framer-motion";
import { PiGuitarDuotone as GuitarIcon } from "react-icons/pi";
import { FaPhotoVideo } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 relative overflow-hidden">
      {/* Notas musicales decorativas */}
      <div className="absolute opacity-10 top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl md:text-6xl text-amber-800"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            ♪
          </div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl md:text-6xl text-amber-800"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            ♫
          </div>
        ))}
      </div>

      <div className="max-w-3xl w-full bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl p-7 sm:p-8 md:p-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ rotate: -30, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-amber-700 mb-6"
          >
            <GuitarIcon className="w-24 h-24 md:w-32 md:h-32" />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
              Gregorio
            </h1>
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-amber-600 mr-3"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-700">
                90 años
              </h2>
              <div className="h-0.5 w-12 bg-amber-600 ml-3"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-amber-900"
          >
            <p className="text-lg mb-4">
              ¡Bienvenidos al álbum de recuerdos del cumpleaños!
            </p>
            <p className="text-md mb-6">
              Ayudanos a crear un hermoso álbum de recuerdos para Gregorio.
              Podés subir tus fotos de la celebración haciendo clic en el botón
              de abajo.
            </p>
            <div className="bg-amber-100 border-l-4 border-amber-500 p-3 sm:p-4 text-sm text-amber-700 rounded">
              <p>
                <strong>Sugerencias:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-left">
                <li>
                  Asegurate de que no sean fotos borrosas o de mala calidad
                </li>
                <li>
                  Si vas a subir videos, asegurate de que no sean muy largos (el
                  espacio es limitado)
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.a
            className="flex items-center justify-center bg-amber-600 focus:bg-amber-700 hover:bg-amber-700 text-white font-medium rounded-lg px-8 py-4 shadow-lg transition-all duration-300 w-full md:w-auto"
            href="https://photos.app.goo.gl/ngVkQ3rekcyfRrQU8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FaPhotoVideo className="text-xl mr-2" />
            <span className="text-lg">Subir fotos al álbum</span>
          </motion.a>
        </div>
      </div>

      <motion.footer
        className="mt-5 text-center text-amber-700 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Con cariño, para celebrar 90 años de música y alegría
      </motion.footer>
    </div>
  );
}
