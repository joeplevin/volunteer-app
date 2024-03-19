"use client"

import testData from "/lib/MOCK_DATA.json";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {useState, useEffect} from 'react';



const ViewJobsDataTable = () => {
    const [jobsData,setjobsData] = useState(() => testData, []);

    useEffect(() => {

        fetch('http://localhost:3000/MOCK_DATA.json')
            .then (res => res.json())
            .then (jsonData => SVGMetadataElement(jsonData));
    })
  return (
    <div>
    <h1><center>Current Jobs</center></h1>
   <form>
       <label>
           <Table aria-label='Table View of Jobs'>
                <TableHeader>

                        <TableColumn>ID</TableColumn>
                        <TableColumn>Charity Name</TableColumn>
                        <TableColumn>Charity Description</TableColumn>
                        <TableColumn>Job</TableColumn>
                        <TableColumn>Job Description</TableColumn>
                        <TableColumn>Edit</TableColumn>
                        <TableColumn>Delete</TableColumn>
    
                </TableHeader>
                <TableBody>
                    {
                        jobsData.map((jobsData, item) =>(
                            <TableRow key={item}>
                                <TableCell>{jobsData.id}</TableCell>
                                <TableCell>{jobsData.charityname}</TableCell>
                                <TableCell>{jobsData.charitydesc}</TableCell>
                                <TableCell>{jobsData.job}</TableCell>
                                <TableCell>{jobsData.jobdesc}</TableCell>
                                <TableCell>
                                    <Button color="primary">
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color="danger">
                                        Delete
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))

                    }
                    
                </TableBody>
            </Table>
                
                         

       </label>
   </form>
</div>
  )
}

export default ViewJobsDataTable;