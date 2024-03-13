"use client"

import React, {useState, useEffect} from 'react';
import testData from "/lib/MOCK_DATA.json";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";

const ViewJobs = () => {

    const [Data] = useState(() => testData, []);

    useEffect(() => {

        fetch('http://localhost:3000/MOCK_DATA.json')
            .then (res => res.json())
            .then (jsonData => SVGMetadataElement(jsonData));
    })

  return (
    <>
    <h1><center>Current Jobs</center></h1>
   <form>
       <label>
           <Table aria-label='Table View of Jobs'>
                <TableHeader>

                        <TableColumn>ID</TableColumn>
                        <TableColumn>Genders</TableColumn>
                        <TableColumn>Current Job</TableColumn>
                        <TableColumn>Duration</TableColumn>
                        <TableColumn>Action</TableColumn>
    
                </TableHeader>
                <TableBody>
                    {
                        Data.map((Data, item) =>(
                            <TableRow key={item}>
                                <TableCell>{Data.id}</TableCell>
                                <TableCell>{Data.genders}</TableCell>
                                <TableCell>{Data.current_job}</TableCell>
                                <TableCell>{Data.duration}</TableCell>
                                <TableCell>
                                    <Button color="primary">
                                        Edit
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))

                    }
                    
                </TableBody>
            </Table>
                
                         

       </label>
   </form>
</>
  )
};


export default ViewJobs;
 