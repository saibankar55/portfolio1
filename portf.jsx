import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Sai Bankar - WebXR Developer</h1>
          <ul className="flex space-x-4">
            {['home', 'about', 'work', 'skills', 'blog', 'contact'].map((tab) => (
              <li key={tab}>
                <button
                  className={`text-lg transition-all duration-300 ${
                    activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
                  }`}
                  onClick={() => handleTabChange(tab)}
                  aria-label={`Go to ${tab}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="text-lg bg-transparent text-gray-600 transition-all duration-300"
            onClick={handleDarkModeToggle}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      {/* Main content with padding for fixed navbar */}
      <div className="pt-16">
        {activeTab === 'home' && (
          <div className="hero p-4 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold animate-fadeIn">Welcome to my portfolio!</h2>
            <p className="text-lg sm:text-xl lg:text-2xl animate-fadeIn">I'm Sai Bankar, a WebXR developer with a passion for creating immersive experiences.</p>
            <button
              className="text-lg sm:text-xl bg-blue-500 text-white p-2 rounded mt-4 transition-all duration-300"
              onClick={() => handleTabChange('work')}
            >
              Explore My Work
            </button>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="p-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-lg">I'm a WebXR developer with a background in computer science and a passion for creating immersive experiences.</p>
            <img
              src="https://via.placeholder.com/200x200"
              alt="Profile Picture"
              className="w-48 h-48 rounded-full mt-4"
              loading="lazy"
            />
          </div>
        )}

        {activeTab === 'work' && (
          <div className="p-4">
            <h2 className="text-2xl font-bold">My Work</h2>
            <div className="flex flex-wrap justify-center">
              {['Project 1', 'Project 2', 'Project 3'].map((project) => (
                <div key={project} className="w-48 h-48 bg-gray-200 m-4">
                  <h3 className="text-lg font-bold">{project}</h3>
                  <p className="text-lg">A brief description of {project.toLowerCase()}.</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="p-4">
            <h2 className="text-2xl font-bold">My Skills</h2>
            <ul className="flex flex-wrap justify-center">
              {[
                { name: 'WebXR', desc: 'I have experience with WebXR development using A-Frame and Three.js.' },
                { name: 'AR/VR', desc: 'I have experience with AR/VR development using Unity and Unreal Engine.' },
                { name: 'AI/ML', desc: 'I have experience with AI/ML development using TensorFlow and PyTorch.' },
              ].map((skill) => (
                <li key={skill.name} className="m-4">
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                  <p className="text-lg">{skill.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="p-4">
            <h2 className="text-2xl font-bold">My Blog</h2>
            <ul className="flex flex-wrap justify-center">
              {['Post 1', 'Post 2', 'Post 3'].map((post) => (
                <li key={post} className="m-4">
                  <h3 className="text-lg font-bold">{post}</h3>
                  <p className="text-lg">A brief description of {post.toLowerCase()}.</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="p-4">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-lg">If you have any questions or would like to collaborate on a project, please don't hesitate to reach out.</p>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-4 border rounded"
                required
                aria-label="Name"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border rounded"
                required
                aria-label="Email"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 mb-4 border rounded"
                required
                aria-label="Message"
                minLength="10"
              />
              <button
                type="submit"
                className="text-lg bg-blue-500 text-white p-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
