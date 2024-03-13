import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function CreateJob() {
    return (
        <>
        <form>
        <h1><b><center>Edit Charity Profile</center></b></h1>
                <div className="flex flex-col gap-2 p-2 m-5 border rounded-md">
                    <Input size="lg" type="organisationName" label="Name" placeholder="Enter a name" />
                    <Input size="lg"  type="organisationDesc" label="Description" placeholder="Enter a description" />

                <Button className="flex-wrap m-2 border rounded-md">
                    Submit
                </Button>

                </div>
        </form>
        </>
    )
  }

  export default CreateJob;