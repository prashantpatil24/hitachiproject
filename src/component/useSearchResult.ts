import { useCallback, useEffect, useState } from 'react';

export type IPeopleRespose = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

// type IPeoples = {
//     count: number;
//     next: string;
//     previous?: any;
//     results: IPeopleRespose[];
// }

export type IStartShipRespose = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

// export type IStartShips = {
//     count: number;
//     next: string;
//     previous?: any;
//     results: IStartShipRespose[];
// }

const useAPIResonse = (searchType: string) => {

    const [searchResult, setSearchResult] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<string>('')
    const [people, setPeople] = useState<IPeopleRespose[] | undefined>([])
    const [starships, setStarships] = useState<IStartShipRespose[] | undefined>([])
    const [pages, setPages] = useState<number>(0)


    const handleSearchField = useCallback((searchField) => {
        setSearchResult(searchField ?? '')
        let filterResult: IPeopleRespose[] | IStartShipRespose[] | undefined = []
        if (searchType === 'people') {
            filterResult = people && people.filter((item: IPeopleRespose) => {
                return item.name.includes(searchField)
            })
        } else {
            filterResult = starships && starships.filter((item: IStartShipRespose) => {
                return item.name.includes(searchField)
            })
        }
        setPages(filterResult?.length ?? 0)
    }, [people, starships, searchType])

    useEffect(() => {
        const url = searchType === 'people' ? 'https://swapi.dev/api/people' : 'https://swapi.dev/api/starships'
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setIsLoading(false)
                setIsError('')
                searchType === 'people' ? setPeople(json.results) : setStarships(json.results)
            }).catch((e) => {
                setIsLoading(false)
                setIsError(e)
            })
    }, [searchType])

    return { isLoading, isError, people, starships, searchResult, pages, handleSearchField };
};

export default useAPIResonse;
