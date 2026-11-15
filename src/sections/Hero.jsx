export default function Hero() {
    return(
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Tailwind CSS hero component"
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">RANE's PORTFOLIO</h1>
      <p className="py-6">
        A short glimpse of my current projects.
      </p>
    </div>
  </div>
</div>
    )
}