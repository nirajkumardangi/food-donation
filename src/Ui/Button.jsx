
let button_classes="px-2 sm:px-4  py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 text-stone-100"
function Button({content,...props}) {
  return (
    <>
        <button className={button_classes} {...props}>{content}</button>
    </>
  )
}

export default Button;
