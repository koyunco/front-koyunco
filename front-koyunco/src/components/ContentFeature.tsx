import { PuzzlePieceIcon, ShieldCheckIcon, LockClosedIcon, ScaleIcon, DocumentCheckIcon } from '@heroicons/react/20/solid'

function ContentFeature() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base/7 font-semibold text-indigo-600">Trusted Partnership</p>
            </div>
            <h2 className="max-w-lg mb-6 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl md:mx-auto">Partnering to Empower Your Business</h2>
            <p className="mt-6 text-lg/8 text-gray-600">We collaborate closely with your team to create tailored IT solutions, ensuring long-term success and growth through secure, reliable technology.</p>
          </div>
          <div className="grid max-w-screen-lg gap-6 row-gap-10 mx-auto lg:grid-cols-2">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <PuzzlePieceIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">IT Strategy & Consulting</h6>
                <p className="mb-3 text-base/7 text-gray-700">Our IT consulting services help you define and execute strategies that align with your business objectives. We assess your current IT infrastructure and implement best-in-class technologies to optimize performance and reduce risk. With our expertise, we guide you through digital transformation, ensuring every step enhances your overall business efficiency.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <ScaleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">Trusted Partnership for Long-Term Success</h6>
              <p className="mb-3 text-base/7 text-gray-700">We believe in building lasting relationship acting as true partners in your journey. By understanding your business needs and goals, we tailor IT solutions that drive growth, efficiency, and resilience. We work alongside you to ensure your technology always serves your business, helping you overcome challenges and seize new opportunities with confidence.</p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <ShieldCheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">Compliance & Data Security</h6>
                <p className="mb-3 text-base/7 text-gray-700">Compliance with industry standards and regulations is essential for maintaining trust with your clients and avoiding penalties. We offer comprehensive solutions to ensure your IT systems meet compliance requirements and audit trails. Our team works with you to ensure data integrity, security, and privacy are always maintained, meeting both local and international standards.</p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <DocumentCheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">Secure File Transfer Solutions</h6>
              <p className="mb-3 text-base/7 text-gray-700">At Koyun, we provide state-of-the-art managed file transfer solutions designed to keep your sensitive data secure and accessible. Our solutions ensure seamless, encrypted file exchanges, whether your business is sharing large files internally, externally, or across different platforms. We prioritize both security and reliability, giving you peace of mind as your data moves.</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ContentFeature;