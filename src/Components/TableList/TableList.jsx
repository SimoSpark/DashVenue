/* eslint-disable no-underscore-dangle */
import React from 'react';
import './tableList.scss';

// mui table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import dummy image
import book1 from '../../Images/blouse.jpg';
import book2 from '../../Images/jeans.jpg';
import book3 from '../../Images/jacket.jpg';
import book4 from '../../Images/T shirt.png';

function TableList() {
    // Replace this data with your own
    const data = [
        {
            _id: 10,
            product: 'kswa',
            image: book1,
            customer: 'Devid John',
            date: '3 July, 2024',
            ammount: '399',
            method: 'XS /  L',
            status: 70,
            category: 'Blouse',
        },
        {
            _id: 18,
            product: 'hipapp',
            image: book2,
            customer: 'Julia Ani',
            date: '23 April, 2024',
            ammount: '229',
            method: 'XXS / L / M',
            status: 203,
            category: 'Jeans',
        },
        {
            _id: 33,
            product: 'hoody',
            image: book3,
            customer: 'John Smith',
            date: '10 July, 2024',
            ammount: '349',
            method: 'XXL / M',
            status: 66,
            category: 'Jacket',
        },
        {
            _id: 70,
            product: 'jurusalem',
            image: book4,
            customer: 'Devid John',
            date: '3 March, 2024',
            ammount: '299',
            method: 'XXS / L / M',
            status: 11,
            category: 'T-shirt',
        },
    ];

    return (
        <TableContainer component={Paper} className="table_list">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table_cell">ProductId</TableCell>
                        <TableCell className="table_cell">ProductName</TableCell>
                        <TableCell className="table_cell">Merchant</TableCell>
                        <TableCell className="table_cell">PriceDH</TableCell>
                        <TableCell className="table_cell">DateAdded</TableCell>
                        <TableCell className="table_cell">Sizes</TableCell>
                        <TableCell className="table_cell">Stock</TableCell>
                        <TableCell className="table_cell">Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row" className="table_cell">
                                <div className="product_idd">
                                    <img src={row.image} alt="product" className="product_img" />
                                    {row._id}
                                </div>
                            </TableCell>
                            <TableCell className="table_cell">{row.product}</TableCell>
                            <TableCell className="table_cell">{row.customer}</TableCell>
                            <TableCell className="table_cell">{row.ammount}</TableCell>
                            <TableCell className="table_cell">{row.date}</TableCell>
                            <TableCell className="table_cell">{row.method}</TableCell>
                            <TableCell className="table_cell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                            <TableCell className="table_cell">{row.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableList;
