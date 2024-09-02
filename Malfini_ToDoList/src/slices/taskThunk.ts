// // Define an async thunk to fetch the initial counter value from an API
// import {createAsyncThunk} from "@reduxjs/toolkit";
//
// export const fetchInitialCounter = createAsyncThunk(
//     'task/fetchInitialtasks',
//     async () => {
//         const response = await fetch('/api/counter'); // Replace with your API endpoint
//         const data = await response.json();
//         return data.value as number; // Assuming the API returns an object with a `value` field
//     }
// );
