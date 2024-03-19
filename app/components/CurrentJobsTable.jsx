"use client"

import React, {useState, useEffect} from 'react';
import testData from "/lib/ViewJobData.json";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";


const currentjobsTable = () => {
    const [currentJobs, setcurrentJobs] = useState(() => testData, []);
    
    useEffect(() => {
    
        fetch('http://localhost:3000/ViewJobData.json')
            .then (res => res.json())
            .then (jsonData => SVGMetadataElement(jsonData));
    })
  return (
    <div>

        <h1><center>Job Removal</center></h1>
          <form>
              <label>
                  <Table aria-label='Table View of Current Jobs'>
                      <TableHeader>

                          <TableColumn>ID</TableColumn>
                          <TableColumn>Job Title</TableColumn>
                          <TableColumn>Job Status</TableColumn>
                          <TableColumn>Duration</TableColumn>
                          <TableColumn>Start Date</TableColumn>
                          <TableColumn>End Date</TableColumn>
                          <TableColumn>Action</TableColumn>

                      </TableHeader>
                      <TableBody>
                          {
                                currentJobs.map((currentJobs, item) => (
                                    <TableRow key={item}>
                                        <TableCell>{currentJobs.id}</TableCell>
                                        <TableCell>{currentJobs.jobtitle}</TableCell>
                                        <TableCell>{currentJobs.job_status}</TableCell>
                                        <TableCell>{currentJobs.duration}</TableCell>
                                        <TableCell>{currentJobs.start_date}</TableCell>
                                        <TableCell>{currentJobs.end_date}</TableCell>
                                        <TableCell>
                                        <Button color="danger" variant='faded'>
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
export default currentjobsTable;