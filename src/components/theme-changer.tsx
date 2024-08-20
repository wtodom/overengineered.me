export default function ThemeChanger() {
    return (
        <div className="join">
            <input className="join-item btn theme-controller " type="radio" name="options" value="dark" aria-label="dark" defaultChecked />
            <input className="join-item btn theme-controller" type="radio" name="options" value="aqua" aria-label="aqua" />
            <input className="join-item btn theme-controller" type="radio" name="options" value="light" aria-label="light" />
        </div>
    )
}
