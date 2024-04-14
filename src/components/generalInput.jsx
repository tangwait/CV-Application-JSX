export default function General() {
    return (
        <>
        <div className="general-inputs">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Phone Number
                    <input type="number" name="phoneNumber"/>
                </label>
            </form>
        </div>
        </>
    )
}

