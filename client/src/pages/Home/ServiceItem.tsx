import { Icon } from "@/components"
// tslint:disable-next-line:no-var-requires
const Zoom = require("react-reveal/Zoom")
export function ServiceItem({
  title,
  description,
  iconName,
}: {
  title: string
  description: string
  iconName: string
}): JSX.Element {
  return (
    <Zoom bottom={true}>
      <div className="relative w-full h-[200px] text-center p-3 hover:bg-primary-100 transition-all in-img:hover:opacity-100 duration-500 col center hover:shadow-lg rounded-lg">
        <Icon name={iconName} type="solid" className="z-20 h-8 mb-3 text-primary-500" />
        <h4 className="z-20 mb-2 text-xl font-medium">{title}</h4>
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

