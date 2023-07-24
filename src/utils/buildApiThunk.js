export const buildApiThunk =
	api =>
		async (props, { rejectWithValue }) => {
			let res;
			try {
				res = await api(props);
			} catch (err) {
				return rejectWithValue(err.response.data);
			}

			return res.data;
		};
