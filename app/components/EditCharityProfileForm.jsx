"use client"

import {Input} from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image, Button, Textarea} from "@nextui-org/react";

const EditCharityProfileForm = () => {
  return (
    <>
        <Card className="flex flex-col gap-2 p-2 m-5 border rounded-md">
          <CardHeader className="justify-center">

            <CardBody>
              <h1><center>Edit Information</center></h1>
              
              <br></br>

            <Textarea
              className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
              label="Name"
              placeholder="Enter your Charity here"
            />

            <br></br>

            <Textarea
              className="flex flex-col gap-2 p-2 m-5 max-w-xl"
              label="Description"
              placeholder="Enter your description here"
            />

            <br></br>

            <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl mb-6"
            label="Job"
            placeholder="Enter a job here"
            />

            <br></br>

            <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl"
            label="Job Description"
            placeholder="Enter a job description here"
            />

            <br></br>

            <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl"
            label="Wanted Skills"
            placeholder="Enter required skills here"
            />
            
            <br></br>

            <Button
              className={"flex flex-col gap-2 p-2 m-5 max-w-x text-foreground border-default-300"}
              color="primary"
              size="md"
          
        >
          Update
        </Button>
            
        </CardBody>
        </CardHeader>
        </Card>
    </>
           
  )
}

export default EditCharityProfileForm;