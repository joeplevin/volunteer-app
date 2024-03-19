"use client"

import React from 'react';
import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

const EditJobsPage = () => {
  return (
    <>
    <div>
            <form>
        <h1><b><center>Edit Job</center></b></h1>
                <div className="flex flex-col gap-2 p-2 m-5 border rounded-md">
                    <Input size="lg" type="organisationName" label="Charity Name" placeholder="New Name" />
                    <br></br>
                    <Input size="lg"  type="organisationDesc" label="Description" placeholder="Enter a new charity description" />
                    <br></br>
                    <Input size="lg"  type="organisationDesc" label="Job Title" placeholder="Enter a new job title date" />
                    <br></br>
                    <Input size="lg"  type="organisationDesc" label="New Job Description" placeholder="Enter a new job description" />
                    <br></br>

                    <Dropdown>
                <DropdownTrigger>
                    <Button
                        className='flex flex-col gap-2 p-2 m-5 max-w-x text-foreground border-default-300'
                        color='primary'
                        size='md'
                    >
                        Choose New Skills Needed
                    </Button>
                </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem key="computing">Computing 1</DropdownItem>
                        <DropdownItem key="computing">Computing 2</DropdownItem>
                        <DropdownItem key="computing">Computing 3</DropdownItem>
                    </DropdownMenu>
            </Dropdown>

                <Button className="flex flex-col gap-2 p-2 m-5 max-w-x text-foreground border-default-300" color='primary'>
                    Save
                </Button>
                </div>
        </form>
   </div>
    </>
  );
}

export default EditJobsPage;