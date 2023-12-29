const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        {/* items-center alinha na vertical */}
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Nós amamos o
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              conforto
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
        quibusdam labore soluta nesciunt vero error a iste quasi veritatis atque
        nisi expedita, fugiat nobis voluptatibus porro excepturi. Reiciendis,
        nihil!
      </p>
    </>
  );
};

export default About;
