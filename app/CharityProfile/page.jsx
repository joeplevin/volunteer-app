import Button from "@mui/material/Button"

function CharityProfile() {
    return (
    <>
        <h1><center>Charity Profile Page</center></h1>
        <form>
            <label>
                Charity Name: <br />
                <input type="text" placeholder="Enter your Charity Name"/>

            </label>

            <label>
            <br /><br />
                Charity description:<br />
                <textarea  name="name" placeholder="Enter your Charity Name" rows={5} cols={50} >
            </textarea>
            </label>

            <br /><br />
            <div>
            <button>Save</button>
            </div>
            
        </form>
    </>
)
}
export default CharityProfile;