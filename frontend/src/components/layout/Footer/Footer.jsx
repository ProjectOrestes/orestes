const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 p-8 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-black">
            &copy; 2026 Project Orestes <span className="text-blue-500 mx-2">|</span> Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
