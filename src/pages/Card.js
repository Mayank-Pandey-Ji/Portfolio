export default function Card({ image, title, description, githubLink, demoLink }) {
  return (
    <div className="bg-[#0a192f] border border-[#00ff9f] text-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto transition-transform transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="rounded-lg w-full" />
      </div>
      <h2 className="text-2xl font-bold text-[#00ff9f] mt-4">{title}</h2>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
      <div className="flex gap-4 mt-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00ff9f] hover:bg-[#00cc7a] text-black px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00ff9f] hover:bg-[#00cc7a] text-black px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition"
        >
          <i className="fas fa-external-link-alt"></i> Demo
        </a>
      </div>
    </div>
  );
}
