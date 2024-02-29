import './button.css'

type ButtonType = {
    name?: string
    onClick: () => void
    disabled?: boolean
    className?: string
    icon?: string
}
export const Button = ({onClick, name, disabled, className, icon, ...props}: ButtonType) => {
    function onClickHandler() {
        onClick()
    }

    const combainClassName = `${className} ${!name && icon ? 'circle' : ''} ${name && icon ? 'big' : ''}`
    return <button onClick={onClickHandler} disabled={disabled} className={combainClassName}>
        {name && <span>{name}</span>}
        {icon && <i className={icon}></i>}
    </button>
}