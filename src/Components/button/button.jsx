import "./button.css"

function Button({text}){
    return (
        <>
        <button className="mainbtn">
        {text}
        </button>
        </>
    )
}
export default Button;