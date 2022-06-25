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
import Search from "./Search";
import useAPIResonse, { IPeopleRespose } from "./useSearchResult";
//import people from "../data/people.json"


// Table of people data
const People = () => {

    const { isLoading, isError, people, searchResult, pages, handleSearchField } = useAPIResonse('people');

    if (isLoading) { return <Box sx={{ display: 'flex' }}> <CircularProgress /> </Box> }
    if (isError) { return <p>{'Error occured while fetching notification messages'}</p> }
    if (!isLoading) {
        return (
            <div style={{ margin: "0 0.5em" }}>
                <Link to="/dashboard">Dashboard</Link>
                <Typography variant="h5" sx={{ marginBottom: "10px" }}>People</Typography>
                <Search getSearchField={handleSearchField} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Birth Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {people && people.length > 0 && people.filter((item: IPeopleRespose) => {
                                return item.name.includes(searchResult)
                            }).map((item: IPeopleRespose, index: number) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.gender}</TableCell>
                                    <TableCell align="left">{item.birth_year}</TableCell>
                                </TableRow>
                            ))}
                            {pages === 0 && 'No record found'}
                        </TableBody>
                    </Table>
                </TableContainer>
                {pages > 0 && <Pagination count={10} />}
            </div>
        )
    } else { return <></> }
}
export default People;