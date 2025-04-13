import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

function ContentFeature() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base/7 font-semibold text-indigo-600">Brand new</p>
            </div>
            <h2 className="max-w-lg mb-6 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl md:mx-auto">
              The brown fox jumps over a lazy dog
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-6 row-gap-10 mx-auto lg:grid-cols-2">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">The deep ocean</h6>
                <p className="mb-3 text-base/7 text-gray-700">
                  A flower in my garden, a mystery in my panties. Heart attack never
                  stopped old Big Bear. I didn't even know we were calling him Big
                  Bear. We never had the chance to.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">
                  When has justice
                </h6>
                <p className="mb-3 text-base/7 text-gray-700">
                  Rough pomfret lemon shark plownose chimaera southern sandfish
                  kokanee northern sea robin Antarctic cod. Yellow-and-black
                  triplefin gulper South American Lungfish mahi-mahi, butterflyfish
                  glass catfish soapfish ling gray mullet!
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">Organically grow</h6>
                <p className="mb-3 text-base/7 text-gray-700">
                  A slice of heaven. O for awesome, this chocka full cuzzie is as
                  rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                  Hercules Morse, as big as a horse and Mrs Falani were up to no
                  good with a bunch of crook pikelets.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-50">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-gray-900 text-base/7 title-font font-bold">
                  A slice of heaven
                </h6>
                <p className="mb-3 text-base/7 text-gray-700">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling. Inspiring, invest
                  synergy capacity building, white paper; silo, unprecedented
                  challenge B-corp problem-solvers.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ContentFeature;