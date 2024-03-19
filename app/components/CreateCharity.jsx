"use client"

import React from 'react'
import {Card, CardHeader, CardBody, Image, Button, Textarea} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";


const CreateCharity = () => {
  return (
    <>
        <Card className="flex flex-col gap-2 p-2 m-5 border rounded-md">
          <CardHeader className="justify-center">

            <CardBody>
              <h1><center>Create Charity</center></h1>
              
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

            {/*Either that or use below and make it such that charities can only choose from a selected amount of skills*/}
            {/* <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl"
            label="Wanted Skills"
            placeholder="Enter required skills here"
            /> */}

            <Dropdown>
                <DropdownTrigger>
                    <Button
                        className='flex flex-col gap-2 p-2 m-5 max-w-x text-foreground border-default-300'
                        color='primary'
                        size='md'
                    >
                        Choose Skills Needed
                    </Button>
                </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem key="computing">Computing 1</DropdownItem>
                        <DropdownItem key="computing">Computing 2</DropdownItem>
                        <DropdownItem key="computing">Computing 3</DropdownItem>
                    </DropdownMenu>
            </Dropdown>
            
            <br></br>

            <Button
              className={"flex flex-col gap-2 p-2 m-5 max-w-x text-foreground border-default-300"}
              color="primary"
              size="md"
          
        >
          Create Opportunity
        </Button>
            
        </CardBody>
        </CardHeader>
        </Card>
    </>
         
  )
}

export default CreateCharity;