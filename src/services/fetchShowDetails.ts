import axios from 'axios';

export async function fetchShowDetails(id: number) {
  const { data } = await axios.get(`/shows/${id}?embed=cast`);
  return data;
}
