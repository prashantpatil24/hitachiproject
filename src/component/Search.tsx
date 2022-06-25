import React from "react"
import { Button, TextField } from "@mui/material"

// Search used alongside the tables
type ISearch = {
    getSearchField: (searchField: string | undefined) => void
}

const Search = (props: ISearch) => {
    const { getSearchField } = props
    const [searchField, setSearchField] = React.useState<string | undefined>()

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target?.value ?? '')
    }
    const handleSearchSubmit = () => {
        getSearchField(searchField)
    }

    return (
        <div>
            <TextField onChange={handleSearch} id="" label="Search" size="small" />
            <Button onClick={handleSearchSubmit}>Search</Button>
        </div>
    )
}

export default Search;
