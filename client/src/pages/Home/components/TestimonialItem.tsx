// tslint:disable-next-line:no-var-requires
const Zoom = require("react-reveal/Zoom")
export function TestimonialItem({
  name,
  jobType,
  description,
}: {
  name: string
  jobType: string
  description: string
}): JSX.Element {
  return (
    <Zoom bottom={true}>
      <div className="relative w-full text-center !p-5 hover:bg-grey-400 transition-all in-img:hover:opacity-100 duration-500 col center hover:shadow-lg rounded-lg">
        <h4 className="z-20 text-xl font-medium">{name}</h4>
        <h4 className="z-20 mb-3 font-medium text-md">{jobType}</h4>

        <p className="z-20">{description}</p>
        <img
          className="absolute -top-1 -left-1 w-[150px] z-10 opacity-0 transition-all  duration-500"
          alt="top-box"
          src="/images/top-box.png"
        />
        <img
          className="absolute -bottom-1 -right-1 w-[150px] z-10 opacity-0 transition-all  duration-500"
          alt="bottom-box"
          src="/images/bottom-box.png"
        />
      </div>
    </Zoom>
  )
}

