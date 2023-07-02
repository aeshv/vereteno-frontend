export const buildApiThunk =
	api =>
		async (props, { rejectWithValue }) => {
			let res;
			try {
				res = await api(props);
				console.log('buildApiThunk', res)
			} catch (err) {
				console.log('buildApiThunk', err)
				return rejectWithValue(err.response.data);
			}

			return res.data;
		};
