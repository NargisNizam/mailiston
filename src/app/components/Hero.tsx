import React from 'react'
const Hero = () => {
  return (
    <div
  className="hero h-screen w-full flex justify-center items-center "
  style={{
    backgroundImage: "url(/boutiqe.1.jpeg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-rose-950">Styles Boutique</h1>
      <p className="mb-5 text-rose-950">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary bg-purple-500 rounded-full h-6 w-40">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero