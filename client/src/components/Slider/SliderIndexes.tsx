import { tw } from "@/shared"

export function SliderIndexes({
  index,
  childrenArray,
  onChangeIndex
}: {
  index: number,
  childrenArray: (React.ReactChild | React.ReactFragment | React.ReactPortal)[]
  onChangeIndex?: (index: number) => void
}): JSX.Element {
  return (
    <div
      className="absolute left-0 flex justify-center w-full pl-4 slider-indexes bottom-5">
      {childrenArray.map((_: any, newIndex: number) => (
        <div className={tw`
          z-10
          w-3
          h-3
          rounded-full
          center
          not-last:mr-2
          ${index === newIndex ? `
            bg-white
          ` : `
            bg-black/50
            mouse:hover:bg-black/60
            mouse:active:bg-black/70
            touch:active:bg-black/60
          `}
        `}
          key={newIndex}
          onClick={() => onChangeIndex && onChangeIndex(newIndex)}
        />

      ))}
    </div>
  )
}