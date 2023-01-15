import { tw } from "@/shared"

export const PageTw = tw`
    flex
    w-screen
    p-10
    justify-center
    bg-white
    children-div:border-b
    children-div:border-solid
    children-div:border-grey-300
    children-div:my-[50px]
    children-div:w-[calc(100vw-80px)]
    children-div:max-w-screen-lg
    in-h2:text-2xl
    in-h2:py-5
    in-h2:text-primary-800
    in-strong:flex
    in-strong:font-normal
    in-strong:text-lg
    in-strong:pt-8
    in-strong:pb-3
    in-strong:text-primary-800
    in-p:py-3
    in-li:leading-normal
    sm:w-[initial]
    sm:px-[100px]
`