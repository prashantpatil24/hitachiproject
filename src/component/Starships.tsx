import React from "react"
import { Link } from "react-router-dom"
import {
    Paper,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    CircularProgress,
    Box
} from "@mui/material"
import Search from "./Search"
//import starships from "../data/starships.json"
import useAPIResonse, { IStartShipRespose } from "./useSearchResult";

// Table of Starship data
const Starships = () => {

    const { isLoading, isError, starships, searchResult, pages, handleSearchField } = useAPIResonse('starship');

    if (isLoading) { return <Box sx={{ display: 'flex' }}> <CircularProgress /> </Box> }
    if (isError) { return <p>{'Error occured while fetching notification messages'}</p> }
    if (!isLoading) {
        return (
            <div style={{ margin: "0 0.5em" }}>
                <Link to="/dashboard">Dashboard</Link>
                <Typography variant="h5" sx={{ marginBottom: "10px" }}>Starships</Typography>
                <Search getSearchField={handleSearchField} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Model</TableCell>
                                <TableCell>Manufacture</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {starships && starships.filter((item: IStartShipRespose) => {
                                return item.name.includes(searchResult)
                            }).map((item: IStartShipRespose, index: number) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.model}</TableCell>
                                    <TableCell align="left">{item.manufacturer}</TableCell>
                                </TableRow>
                            ))}
                            {pages === 0 && 'No record found'}
                        </TableBody>
                    </Table>
                </TableContainer>
                {pages > 0 && <Pagination count={10} />}
            </div >
        )
    } else { return <></> }
}
export default Starships;