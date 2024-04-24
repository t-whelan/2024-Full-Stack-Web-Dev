import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="bg-gray-400 py-40 text-center">
        <h1 className="text-4xl font-semibold text-white mb-8">Hey, I'm Tionne 👋🏽💙</h1>
        <h2 className="text-4xl font-semibold text-white mb-8">A passionate <span className='text-blue-500'>MERN Stack Developer</span> from South Africa</h2>
        <h2 className='text-4xl mb-8'>👩🏽‍💻⌨️💻⚙️</h2>
      </div>

      <div className="bg-blue-500">
        <section id="about" className="text-white font-semibold text-center py-12">
          <h2 className="text-white font-semibold text-center py-12 text-4xl">About Me 👩🏽‍💻📘</h2>
          <Image src="/cv-image.jpg" alt="Your Image" width={300} height={300} className="rounded-full mx-auto" />
          <p className='text-2xl'>I have been in coding and software engineering bootcamps, eager to learn and continuously learn new technologies, and collaborate with new projects and individuals.</p>
          <h3 className="text-2xl mt-8">MERN Stack:</h3>
          <p className="mt-4 text-2xl">M - MongoDB</p>
          <p className='text-2xl'>E - Express</p>
          <p className='text-2xl'>R - React</p>
          <p className='text-2xl'>N - Node</p>
          <p className='text-2xl'>The MERN stack is a popular JavaScript stack used for building dynamic web applications. MongoDB is a NoSQL database, Express is a web application framework for Node.js, React is a JavaScript library for building user interfaces, and Node.js is a JavaScript runtime environment.</p>
        </section>

        <section id="work" className="text-white font-semibold text-center py-12 bg-gray-400">
          <h2 className='text-4xl'>My Work 📁🏆</h2>
          <p className='text-2xl'>Latest Projects and achievements.</p>
          
          <div className="flex justify-center items-center flex-wrap p-4">
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Your Image Link */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                
                <p className="text-gray-700 text-base">Description of  project...</p>
              </div>
            </div>

            {/* Repeat this block for each additional card */}
            {/* Example card */}
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="flex justify-center mb-4">
                  {/* Icon for your project */}
                  <Image src="/nextjs.png" alt="Your Image" width={200} height={200} className="rounded-full" />
                </div>
                <div className="font-bold text-xl text-blue-500 mb-2">Project Name</div>
                <p className="text-gray-700 text-base">Description of project...</p>
              </div>
            </div>
            {/* End of example card */}
            
          </div>
          
        </section>

        <section id="contact" className="text-white font-semibold text-center py-12">
  <h2 className='text-4xl'>Let&apos;s Connect 🔌</h2>
  <Image src="/github.png" alt="github" width={800} height={700} className='mx-auto py-8'  />
  <p className='text-2xl'>Feel free to reach out to connect or collaborate on new projects! I'm open to discussing ideas, sharing updates, and exploring opportunities for collaboration.</p>
  <p className='text-2xl'>You can contact me via email, phone, or through my social media profiles:</p>
  <div className="flex justify-center mt-8">
</div>
</section>

      </div>
    </div>
  );
}
