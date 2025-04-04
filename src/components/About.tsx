import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

export const About = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Hi, I'm Sudharsan S 👋</h1>
        <p className="text-gray-700 mb-6">
          This task management app is proudly designed and developed by <span className="font-semibold">@sudharsan</span>.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="https://sudharsan-3.github.io/portfolio-v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            <MdWeb size={20} />
            Visit My Portfolio
          </a>

          <a
            href="https://www.linkedin.com/in/sudharsansdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            <FaLinkedin size={20} />
            Connect on LinkedIn
          </a>

          <a
            href="https://github.com/Sudharsan-3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            <FaGithub size={20} />
            View GitHub Projects
          </a>
        </div>
      </div>
    </div>
  );
};
