import { createSlice,current} from '@reduxjs/toolkit'
import { SearchMovieData } from '../../Models/movie.model'

type SearchMovieType ={
    movies: SearchMovieData[]
}

const initialState : SearchMovieType = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movie-listing',
    initialState,
    reducers:{
        addMovie:(state,action) =>{
            state.movies = action.payload
            console.log(current(state));
            
        }
    }
})

export const { addMovie} = movieSlice.actions
export default movieSlice.reducer