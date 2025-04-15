import React from 'react'

const Logos = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
                <img className="object-contain w-full mx-auto h-14" src="/images/delta.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-full mx-auto h-14" src="/images/probrands.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="/images/gmb.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="/images/picknpay.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="/images/fidelity.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="/images/tacbf.png" alt="" />
            </div>
        </div>
    </div>
</section>

  )
}

export default Logos