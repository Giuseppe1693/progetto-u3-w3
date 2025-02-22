import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(`data/fetchData`, async (artist) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
  );

  if (!response.ok) {
    throw new Error("Errore nel recupero dei dati");
  }

  return await response.json();
});

export const dataSlice = createSlice({
  name: "songs",
  initialState: {
    songs: {},
    selectedSong: {},
    searchedArtist: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectedSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    setSearchedArtist: (state, action) => {
      state.searchedArtist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const artist = action.meta.arg;
        state.status = "succeeded";
        state.songs[artist] = action.payload.data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedSong } = dataSlice.actions;
export const { setSearchedArtist } = dataSlice.actions;

