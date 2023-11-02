const App = () => {
   return (
      <>
         <section className="max-w-screen-lg px-4 sm:px-8 lg:px-0 mx-auto">
            <nav className="flex justify-center">
               <ul className="bg-neutral-800 flex mt-5 w-fit rounded-lg px-4 py-2 gap-8 text-xs font-medium">
                  <li>
                     <a href="https://github.com/ciptacoding" target="_blank">
                        Github
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.linkedin.com/in/i-gusti-ngurah-cipta-dwipajaya-9019bb231/"
                        target="_blank"
                     >
                        LinkedIn
                     </a>
                  </li>
                  <li>
                     <a href="https://twitter.com/ciptadev" target="_blank">
                        Twitter
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.instagram.com/ciptadwipajayaa/"
                        target="_blank"
                     >
                        Instagram
                     </a>
                  </li>
               </ul>
            </nav>

            <main className="mt-10">
               <div className="flex items-center flex-col">
                  <div>
                     <img
                        src="./src/assets/cipta.png"
                        alt="Profile"
                        className="rounded-full aspect-square h-28 object-top object-cover"
                     />
                  </div>
                  <div className="text-center mt-4">
                     <h1 className="font-extrabold mb-2 text-2xl">
                        Cipta Dwipajaya
                     </h1>
                     <p className="font-bold text-lg">
                        Web Developer, Software Engineer, Tech Enthusiast.
                     </p>
                  </div>
               </div>
            </main>
         </section>
      </>
   );
};

export default App;
